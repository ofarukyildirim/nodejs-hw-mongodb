import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import {
  getContactsController,
  getContactsByIdController,
} from './controllers/contacts.js';

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  const PORT = Number(process.env.PORT) || 3000;
  app.get('/contacts', getContactsController);
  app.get('/contacts/:contactId', getContactsByIdController);

  app.use((req, res) => {
    res.status(404).json({
      message: 'Route not found',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running port: ${PORT}`);
  });
};
