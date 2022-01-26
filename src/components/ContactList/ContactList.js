import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import ContactItem from './ContactItem';
import Loader from 'components/Loader';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const loader = useSelector(contactsSelectors.getLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loader && <Loader />}
      {contacts.length > 0 && (
        <ul className={s.list}>
          <p className={s.total}>Total amount of contacts: {contacts.length}</p>
          {contacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
