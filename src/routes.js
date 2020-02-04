import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import authConfig from './app/middlewares/auth';
import DeliveryController from './app/controllers/DeliveryController';
import SignatureController from './app/controllers/SignatureController';
import OrderController from './app/controllers/OrderController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

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

routes.post('/signatures', upload.single('file'), SignatureController.upload);
routes.post('/orders', OrderController.createOrder);
routes.put('/orders/:id', OrderController.update);
routes.delete('/orders/:id', OrderController.delete);
routes.get('/orders', OrderController.list);
routes.get('/orders/deliveryTime', OrderController.listDeliveryTime);

routes.get('/deliveryman/:id/deliveries', DeliverymanController.list);
routes.put('/deliveryman/:id/update/:delivery', DeliverymanController.update);

routes.post('/delivery/:id/problems', DeliveryProblemController.store);
routes.get('/delivery/:id/problems', DeliveryProblemController.list);
routes.delete('/problem/:id/cancel-delivery', DeliveryProblemController.destroy);

export default routes;