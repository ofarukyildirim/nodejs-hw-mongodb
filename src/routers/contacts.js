import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactsByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

export const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getContactsController));
contactsRouter.get('/:contactId', ctrlWrapper(getContactsByIdController));
contactsRouter.post('/', ctrlWrapper(createContactController));
contactsRouter.patch('/:contactId', ctrlWrapper(patchContactController));
contactsRouter.delete('/:contactId', ctrlWrapper(deleteContactController));
