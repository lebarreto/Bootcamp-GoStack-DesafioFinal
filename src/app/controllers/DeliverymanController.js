import * as Yup from 'yup'; 

import Order from "../models/Order";
import Recipient from '../models/Recipient';
import Delivery from '../models/Delivery';
import Signature from '../models/Signature';
import { getDate } from 'date-fns';

class DeliverymanController{

  async list(req, res){
    const deliveries = await Order.findAll({
      attributes: ['id', 'canceled_at', 'start_date', 'end_date'],
      where:{
        delivaryman_id: req.params.id,
        end_date: null,
        canceled_at: null,
      },
      include: [{
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
    return res.json(deliveries);
  }

  async update(req, res){
    const { delivery } = req.params;

    const schema = Yup.object().shape({
      start_date: Yup.date(),
      end_date: Yup.date(),
      signature_id: Yup.number(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { start_date, end_date, signature_id } = req.body;

    // verify if signature exists
    const signatureExists = await Signature.findByPk(signature_id);

    if(!signatureExists){
      return res.status(400).json({ error: 'Signature does not exists' });
    }

    const order = await Order.findByPk(delivery, {
      include: [
        {
          model: Delivery,
          as: 'delivery',
          attributes: ['name', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name'],
        },
      ],
    });

    const dateD= start_date;
    console.log(dateD);

    const countDelivery = await Order.findAndCountAll({
      where: {
        delivaryman_id: req.params.id,
        start_date: dateD
      }
    });
    console.log(countDelivery);

    if(dateD == req.body.start_date && countDelivery.count > 5){
      return res.status(400).json({ error: 'You can only make 5 deliveries per day'});
    }

    order.update({
      signature_id, start_date, end_date
    });

    return res.json(order);

  }

}

export default new DeliverymanController();