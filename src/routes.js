import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import authConfig from './app/middlewares/auth';
import DeliveryController from './app/controllers/DeliveryController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.addUser);
routes.post('/session', SessionController.verifyUser);

routes.use(authConfig);
routes.post('/recipient', RecipientController.addRecipient);
routes.put('/recipient/:id', RecipientController.updateRecipient);

routes.post('/files', upload.single('file'), FileController.upload);
routes.post('/deliveries', DeliveryController.add);
routes.put('/deliveries/:id', DeliveryController.update);
routes.get('/deliveries', DeliveryController.list);
routes.delete('/deliveries/:id', DeliveryController.remove);


export default routes;