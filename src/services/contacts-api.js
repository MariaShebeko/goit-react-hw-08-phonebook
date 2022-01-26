import axios from 'axios';

axios.defaults.baseURL = 'https://61ea790f7bc0550017bc676c.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  axios.delete(`/contacts/${id}`);
}
