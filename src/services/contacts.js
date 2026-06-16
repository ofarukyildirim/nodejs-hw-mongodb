import { Contact } from '../db/models/Contact.js';

export const getAllContacts = async () => {
  return Contact.find();
};

export const getContactsById = async (id) => {
  return Contact.findById(id);
};
