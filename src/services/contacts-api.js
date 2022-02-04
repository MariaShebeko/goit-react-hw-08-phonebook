import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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

// export async function updateContactName(id, data) {
//   console.log('id', id);
//   console.log('data', data);

//   axios.patch(`/contacts/${id}`, data);
// }

// export async function updateContactNumber(id, data) {
//   axios.patch(`/contacts/${id}`, data);
// }
