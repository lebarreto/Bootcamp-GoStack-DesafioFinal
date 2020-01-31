import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import authConfig from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.addUser);
routes.post('/session', SessionController.verifyUser);

routes.use(authConfig);
routes.post('/recipient', RecipientController.addRecipient);
routes.put('/recipient/:r_id', RecipientController.updateRecipient);


export default routes;