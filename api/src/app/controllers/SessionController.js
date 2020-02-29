import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController{

  // verify if user (email) and password is correct
  async verifyUser(req, res){

    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required()
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails. '});
    }

    const { email, password } = req.body;

    // verify if user exists
    const user = await User.findOne({ where: { email }});

    if(!user){
      return res.status(400).json({ error: 'User not found' });
    }

    // check if password is correct
    if(!(await user.checkPassword(password))){
      return res.status(400).json({ error: 'Password is not correct.' });
    }

    // log user in the system
    const { id, name } = user;

    console.log(user.id);

    return res.json({
      user:{
        id, name, email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
      
    })

  }

}

export default new SessionController();