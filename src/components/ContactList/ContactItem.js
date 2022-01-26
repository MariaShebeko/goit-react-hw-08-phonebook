import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Icon from '../Icon/Icon';
import s from './ContactList.module.css';

export default function ContactItem({ id, name, number }) {
  const loading = useSelector(contactsSelectors.getLoader);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <li key={id} className={s.item}>
      <p className={s.text}>
        <Icon
          iconName="iconAddressBook"
          width="18"
          height="18"
          className={s.iconAddressBook}
        />
        {name}: {number}
      </p>
      <button
        onClick={() => onDeleteContact(id)}
        className={s.button}
        disabled={loading}
      >
        {loading ? 'Deleting...' : 'Delete'}
        <Icon iconName="iconBin" width="18" height="18" className={s.iconBin} />
      </button>
    </li>
  );
}
