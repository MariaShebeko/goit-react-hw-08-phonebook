import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';
import { successNotification } from 'helpers/notification';

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
      successNotification('Contact added');
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

export const changeContactName = createAsyncThunk(
  'contacts/changeContactName',
  async ({ id, name }) => {
    const { data } = await contactsAPI.updateContactName(id, name);
    return data;
  },
);

export const changeContactNumber = createAsyncThunk(
  'contacts/changeContactNumber',
  async ({ id, number }) => {
    const { data } = await contactsAPI.updateContactName(id, number);
    return data;
  },
);
