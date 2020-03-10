import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipient from '../models/Recipient';
import Order from '../models/Order';

class RecipientController {
	// list recipients
	async listRecipient(req, res) {
		const { q } = req.query;
		const filterRecipient = {};

		if (q) {
			filterRecipient.name = { [Op.iLike]: `%${q}%` };
		}

		const recipients = await Recipient.findAll({
			where: filterRecipient,
			attributes: ['id', 'name', 'street', 'complement', 'number', 'state', 'city', 'zip']
		});

		return res.json(recipients);
	}

	async listById(req, res) {
		const recipients = await Recipient.findByPk(req.params.id);

		return res.json(recipients);
	}

	// create recipient
	async addRecipient(req, res) {
		console.log('aloooo');

		// validate fields
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			street: Yup.string().required(),
			number: Yup.number().required(),
			complement: Yup.string(),
			state: Yup.string().required(),
			city: Yup.string().required(),
			zip: Yup.number().required(),
			email: Yup.string().required()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails. ' });
		}

		// insert recipient
		const { id, name, street, number, complement, state, city, zip, email } = await Recipient.create(req.body);
		return res.json({ id, name, street, number, complement, state, city, zip, email });
	}

	// update recipient
	async updateRecipient(req, res) {
		// validate fields
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			street: Yup.string().required(),
			number: Yup.number().required(),
			complement: Yup.string(),
			state: Yup.string().required(),
			city: Yup.string().required(),
			zip: Yup.number().required(),
			email: Yup.string().required()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails. ' });
		}

		// search in db for recipient
		const recipient = await Recipient.findByPk(req.params.id);

		// update recipient
		const { id, name, street, number, complement, state, city, zip, email } = await recipient.update(req.body);
		return res.json({ id, name, street, number, complement, state, city, zip, email });
	}

	// delete recipient
	async delete(req, res) {
		const findRecipient = await Recipient.findByPk(req.params.id);
		const findOrder = await Order.findOne({
			where: {
				recipient_id: findRecipient.id
			}
		});

		if (findOrder) {
			return res.status(400).json({ error: 'Destinatário está relacionado a uma encomenda' });
		}

		await findRecipient.destroy();
		return res.json({});
	}
}

export default new RecipientController();
