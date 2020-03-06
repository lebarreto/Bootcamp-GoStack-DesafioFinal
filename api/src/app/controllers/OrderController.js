import * as Yup from 'yup';
import { isAfter, getSeconds, getMinutes, getHours, format } from 'date-fns';
import { Op } from 'sequelize';

import Recipient from '../models/Recipient';
import Delivery from '../models/Delivery';
import Signature from '../models/Signature';
import Order from '../models/Order';
import NewOrderMail from '../jobs/NewOrderMail';
import Queue from '../../lib/Queue';
import Notification from '../schemas/Notification';

class OrderController {
	async list(req, res) {
		const { q } = req.query;
		const filterOrder = {};

		if (q) {
			filterOrder.product = { [Op.iLike]: `%${q}%` };
		}

		const orders = await Order.findAll({
			where: filterOrder,
			attributes: ['id', 'product', 'start_date', 'end_date', 'canceled_at'],
			include: [
				{
					model: Recipient,
					as: 'recipient',
					attributes: ['id', 'name', 'street', 'number', 'state', 'city', 'zip']
				},
				{
					model: Delivery,
					as: 'delivery',
					attributes: ['id', 'name', 'email']
				},
				{
					model: Signature,
					as: 'signature',
					attributes: ['name', 'path', 'url']
				}
			]
		});
		return res.json(orders);
	}

	async listOrderById(req, res) {
		const orders = await Order.findByPk(req.params.id, {
			attributes: ['id', 'product', 'start_date', 'end_date', 'canceled_at'],
			include: [
				{
					model: Recipient,
					as: 'recipient',
					attributes: ['id', 'name', 'street', 'number', 'state', 'city', 'zip']
				},
				{
					model: Delivery,
					as: 'delivery',
					attributes: ['id', 'name', 'email']
				},
				{
					model: Signature,
					as: 'signature',
					attributes: ['name', 'path', 'url']
				}
			]
		});

		return res.json(orders);
	}

	async listDeliveryTime(req, res) {
		// verify date in req.query
		const { date } = req.query;

		if (!date) {
			return res.status(400).json({ error: 'Invalid date' });
		}

		const timeDelivery = [
			'08:00',
			'09:00',
			'10:00',
			'11:00',
			'12:00',
			'13:00',
			'14:00',
			'15:00',
			'16:00',
			'17:00',
			'18:00'
		];

		const available = getHours(new Date(date));
		if (!(available >= '08' && available <= '18')) {
			return res.status(400).json({ error: 'Time not available' });
		}

		return res.json(timeDelivery);
	}

	async createOrder(req, res) {
		const schema = Yup.object().shape({
			recipient_id: Yup.number().required(),
			delivaryman_id: Yup.number().required(),
			product: Yup.string().required()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' });
		}

		const { recipient_id, delivaryman_id, product } = req.body;

		// verify if recipient exists
		const recipientExists = await Recipient.findByPk(recipient_id);

		if (!recipientExists) {
			return res.status(400).json({ error: 'Recipient does not exists' });
		}

		// verify if delivery man exists
		const deliveryExists = await Delivery.findByPk(delivaryman_id);

		if (!deliveryExists) {
			return res.status(400).json({ error: 'Delivery man does not exists' });
		}

		const orders = await Order.create({
			recipient_id,
			delivaryman_id,
			product
		});

		// email
		await Notification.create({
			content: `New order from ${recipientExists.name}`,
			deliveryman_id: delivaryman_id
		});

		const delivery = await Order.findByPk(orders.id, {
			include: [
				{
					model: Delivery,
					as: 'delivery',
					attributes: ['name', 'email']
				},
				{
					model: Recipient,
					as: 'recipient',
					attributes: ['name']
				}
			]
		});

		await Queue.add(NewOrderMail.key, {
			delivery
		});

		return res.json(orders);
	}

	async update(req, res) {
		const { delivaryman_id, recipient_id } = req.body;

		if (delivaryman_id || recipient_id) {
			return res.status(400).json({ error: 'You cannot change delivery man and recipient' });
		}

		const order = await Order.findByPk(req.params.id, {
			include: [
				{
					model: Delivery,
					as: 'delivery',
					attributes: ['name', 'email']
				},
				{
					model: Recipient,
					as: 'recipient',
					attributes: ['name']
				}
			]
		});

		order.update(req.body);

		return res.json(order);
	}

	async delete(req, res) {
		await Order.destroy({
			where: {
				id: req.params.id
			}
		});

		return res.send();
	}
}

export default new OrderController();
