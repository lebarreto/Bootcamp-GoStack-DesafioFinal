import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController{
  
  // create recipient
  async addRecipient(req, res){
    console.log('aloooo');

    // validate fields
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip: Yup.number().required()
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails. '});
    }

    // insert recipient
    const { id, name, street, number, complement, state, city, zip } = await Recipient.create(req.body);
    return res.json({ id, name, street, number, complement, state, city, zip });

  }

  // update recipient
  async updateRecipient(req, res){

    // validate fields
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip: Yup.number().required()
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails. '});
    }

    // search in db for recipient
    const recipient = await Recipient.findByPk(req.params.id);

    // update recipient
    const { id, name, street, number, complement, state, city, zip } = await recipient.update(req.body);
    return res.json({ id, name, street, number, complement, state, city, zip });

  }


}

export default new RecipientController();