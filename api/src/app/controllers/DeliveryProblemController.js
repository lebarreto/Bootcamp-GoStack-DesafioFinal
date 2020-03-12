import Order from '../models/Order';
import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Queue from '../../lib/Queue';
import Cancellation from '../jobs/CancellationMail';

class DeliveryProblemController {
	async listAll(req, res) {
		const problems = await DeliveryProblem.findAll({
			attributes: ['id', 'delivery_id', 'description'],
			include: [
				{
					model: Order,
					as: 'delivery',
					attributes: ['product', 'start_date', 'end_date', 'canceled_at']
				}
			]
		});

		return res.json(problems);
	}

	async list(req, res) {
		// verify if order exists
		const orderExists = await Order.findByPk(req.params.id);

		if (!orderExists) {
			return res.status(400).json({ error: 'Order does not exists' });
		}

		const problems = await DeliveryProblem.findAll({
			where: {
				delivery_id: req.params.id
			},
			attributes: ['id', 'delivery_id', 'description', 'createdAt'],
			include: [
				{
					model: Order,
					as: 'delivery',
					attributes: ['product', 'start_date', 'end_date', 'canceled_at']
				}
			]
		});

		return res.json(problems);
	}

	async store(req, res) {
		// verify if order exists
		const orderExists = await Order.findByPk(req.params.id);

		if (!orderExists) {
			return res.status(400).json({ error: 'Order does not exists' });
		}

		const delivery_id = req.params.id;
		const { id, description } = req.body;

		const problem = await DeliveryProblem.create({ id, delivery_id, description });
		return res.json(problem);
	}

	async destroy(req, res) {
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

		if (!order) {
			return res.status(400).json({ error: 'Order does not exist' });
		}

		if (order.canceled_at) {
			return res.status(400).json({ error: 'Order already cancelled' });
		}

		order.canceled_at = new Date();
		order.save();

		await Queue.add(Cancellation.key, {
			order
		});
		return res.json(order);
	}

	async delete(req, res) {
		await DeliveryProblem.destroy({
			where: {
				id: req.params.id
			}
		});

		return res.send();
	}
}

export default new DeliveryProblemController();
