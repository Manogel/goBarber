import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

import authMiddleware from './app/middlewares/auth';
import uploadConfig from './config/upload';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.use(authMiddleware);
// Rotas privadas apartir daqui

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);
routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);

routes.put('/users', UserController.update);

export default routes;
