import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      name,
      id: uuidv4(),
      number,
    },
  };
});

export const deleteContact = createAction('contacts/delete');

export const filterContact = createAction('contacts/filter');
