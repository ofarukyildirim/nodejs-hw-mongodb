import { getAllContacts, getContactsById } from '../services/contacts.js';
import mongoose from 'mongoose';

export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.status(200).json({
    data: contacts,
    message: 'Successfully found contacts',
  });
};

export const getContactsByIdController = async (req, res) => {
  const id = req.params.contactId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: 'Invalid contact id',
    });
  }

  const contact = await getContactsById(id);

  if (!contact) {
    return res.status(404).json({
      message: 'Contact not found',
    });
  }

  res.status(200).json({
    data: contact,
    message: `Successfully found contact with id ${id}`,
  });
};
