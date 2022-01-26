import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

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
