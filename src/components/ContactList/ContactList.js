import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getLoader,
  getVisibleContacts,
} from '../../redux/contacts/contacts-selectors';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import ContactItem from './ContactItem';
import Loader from 'components/Loader/Loader';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const loader = useSelector(getLoader);
  const dispatch = useDispatch();
  const renderContacts = () => dispatch(contactsOperations.fetchContacts());

  useEffect(() => {
    renderContacts();
  }, []);

  return (
    <>
      {loader && <Loader />}
      <ul className={s.list}>
        <p className={s.total}>Total amount of contacts: {contacts.length}</p>
        {contacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
