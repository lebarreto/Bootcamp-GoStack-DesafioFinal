import * as Yup from 'yup';
import { Op } from 'sequelize';

import Delivery from '../models/Delivery';
import File from '../models/File';

class DeliveryController {
	async list(req, res) {
		const { q } = req.query;
		const filterDelivery = {};

		if (q) {
			filterDelivery.name = { [Op.iLike]: `%${q}%` };
		}

		const deliveries = await Delivery.findAll({
			where: filterDelivery,
			attributes: ['id', 'name', 'email', 'avatar_id'],
			include: [
				{
					model: File,
					as: 'avatar',
					attributes: ['name', 'path', 'url']
				}
			]
		});

		return res.json(deliveries);
	}

	async add(req, res) {
		// validate fields
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string().required()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails. ' });
		}

		// verify if delivery already exists
		const deliveryExists = await Delivery.findOne({
			where: {
				email: req.body.email
			}
		});

		if (deliveryExists) {
			return res.status(400).json({ error: 'Delivery already exists' });
		}

		// insert delivery
		const { id, name, email } = await Delivery.create(req.body);
		return res.json({ id, name, email });
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string(),
			email: Yup.string().email(),
			avatar_id: Yup.number()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' });
		}

		// search delivery
		const delivery = await Delivery.findByPk(req.params.id);
		const { id, name, email, avatar_id } = await delivery.update(req.body);

		return res.json({
			id,
			name,
			email,
			avatar_id
		});
	}

	async remove(req, res) {
		await Delivery.destroy({
			where: {
				id: req.params.id
			}
		});

		return res.send();
	}
}

export default new DeliveryController();
