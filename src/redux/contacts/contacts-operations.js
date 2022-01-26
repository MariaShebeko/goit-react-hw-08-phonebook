import axios from 'axios';
import * as contactsAPI from '../../services/contacts-api';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://61ea790f7bc0550017bc676c.mockapi.io';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const data = await contactsAPI.fetchContacts();
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

export const addContact =
  ({ name, number }) =>
  async dispatch => {
    dispatch(addContactRequest);

    try {
      const data = await await contactsAPI.addContact({ name, number });
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };

export const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await contactsAPI.deleteContact(contactId);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// export const changeName = contactId => dispatch => {
//   dispatch(changeContactRequest());
//   const update = {};
//   axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
// };

// export const changeNumber = contactId => dispatch => {
//   dispatch(changeContactRequest());
//    const update = {};
//    axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
// };
