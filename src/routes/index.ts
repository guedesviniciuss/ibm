import { Router } from 'express';

import BookRoutes from './books.routes';

const routes = Router();

routes.use('/books', BookRoutes);

export default routes;
