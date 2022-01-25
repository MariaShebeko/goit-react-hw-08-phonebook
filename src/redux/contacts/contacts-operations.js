import axios from 'axios';
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
  // changeContactRequest,
  // changeContactSuccess,
  // changeContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://61ea790f7bc0550017bc676c.mockapi.io';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

export const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = { name, number };

    dispatch(addContactRequest);

    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
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
