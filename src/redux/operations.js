import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './actions';
import {
  addContactAPI,
  fetchContactsAPI,
  deleteContactAPI,
} from '../services/contactsAPI';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const contacts = await fetchContactsAPI();
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};
export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());
  const gettingData = await fetchContactsAPI();
  if (gettingData) {
    const nameArray = gettingData.map(item => {
      return item.name;
    });
    if (!nameArray.includes(contact.name)) {
      try {
        const addingContact = await addContactAPI(contact);
        dispatch(addContactSuccess(addingContact));
      } catch (error) {
        dispatch(addContactError(error));
      }
    } else {
      dispatch(addContactError(`${contact.name} is already in contacts.`));
    }
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await deleteContactAPI(id);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
