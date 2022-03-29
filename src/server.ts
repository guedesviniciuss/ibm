import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';
import './database';
import './containers';

import express, { NextFunction, Request, Response } from 'express';
import figlet from 'figlet';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import AppError from '@errors/AppError';
import routes from './routes';
import swaggerFile from './swagger.json';

const PORT = process.env.PORT || 3000;
const API_NAME = process.env.API_NAME || 'example';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
  (err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response
        .status(err.statusCode)
        .json({ status: 'error', message: err.message });
    }

    return response
      .status(500)
      .json({ status: 'error', message: 'Internal server error' });
  },
);

app.listen(PORT, () => {
  console.log(figlet.textSync(API_NAME, 'Standard'));
  console.log(`application running on port ${PORT}`);
});
