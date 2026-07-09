import { Contact } from '../db/models/Contact.js';

import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = 'name',
  sortOrder = SORT_ORDER.ASC,
  userId,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = Contact.find({
    userId,
  });

  const contactsCount = await Contact.find({
    userId,
  })
    .merge(contactsQuery)
    .countDocuments();

  const contacts = await contactsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactsById = async (id, userId) => {
  return Contact.findOne({
    _id: id,
    userId,
  });
};

export const createContact = async (payload) => {
  return Contact.create(payload);
};

export const updateContact = async (id, payload, userId) => {
  return Contact.findOneAndUpdate(
    {
      _id: id,
      userId,
    },
    payload,
    {
      new: true,
    },
  );
};

export const deleteContact = async (id, userId) => {
  return Contact.findOneAndDelete({
    _id: id,
    userId,
  });
};
