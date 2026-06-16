import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import {
  getContactsController,
  getContactsByIdController,
} from './controllers/contacts.js';

export const setupServer = () => {
  const app = express();
  dotenv.config();
  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  const PORT = Number(process.env.PORT);
  app.get('/contacts', getContactsController);
  app.get('/contacts/:contactId', getContactsByIdController);

  app.listen(PORT, () => {
    console.log(`Server is running port: ${PORT}`);
  });

  app.use((req, res) => {
    res.status(404).json({
      message: 'Route not found',
    });
  });
};
