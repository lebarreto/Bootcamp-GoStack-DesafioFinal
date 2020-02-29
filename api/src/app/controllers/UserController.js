import * as Yup from 'yup';
import User from '../models/User';

class UserController{

  // create user
  async addUser(req, res){

    // validate fields
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required().min(6)
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails. '});
    }

    // verify if user already exists
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if(userExists){
      return res.status(400).json({ error: 'User already exists.' });
    }

    // insert user
    const { id, name, email } = await User.create(req.body);
    return res.json({ id, name, email });

  }


}

export default new UserController();