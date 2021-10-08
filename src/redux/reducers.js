import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => {
    return payload;
  },
  [addContactSuccess]: (state, { payload }) => {
    const nameArray = state.map(item => {
      return item.name;
    });
    if (nameArray.includes(payload.name)) {
      window.alert(`${payload.name} is already in contacts.`);
      return state;
    } else {
      return [...state, payload];
    }
  },
  [deleteContactSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => {
    return payload.toLowerCase();
  },
});

const error = createReducer(null, {
  [addContactError]: (_, action) => action.payload,
  [addContactRequest]: () => null,
  [deleteContactError]: (_, action) => action.payload,
  [deleteContactRequest]: () => null,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});
export default combineReducers({
  items,
  filter,
  error,
  loading,
});
