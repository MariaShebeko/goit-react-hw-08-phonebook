import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import EdiText from 'react-editext';
import { LoaderButtons } from 'components/Loader';
import Icon from '../Icon';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactItem({ id, name, number }) {
  const [nameEdit, setNameEdit] = useState(name);
  const [numberEdit, setNumberEdit] = useState(number);
  const loading = useSelector(contactsSelectors.getLoader);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  const handleSaveName = value => {
    setNameEdit(value);
    dispatch(contactsOperations.changeContactName({ id, value }));
  };

  const handleSaveNumber = value => {
    setNumberEdit(value);
    dispatch(contactsOperations.changeContactNumber({ id, value }));
  };

  return (
    <li key={id} className={s.item}>
      <div className={s.text}>
        <Icon
          iconName="iconAddressBook"
          width="18"
          height="18"
          className={s.iconAddressBook}
        />
        {
          <EdiText
            id={id}
            type="text"
            name="name"
            value={nameEdit}
            onSave={handleSaveName}
          />
        }{' '}
        :{' '}
        {
          <EdiText
            id={id}
            name="number"
            type="number"
            value={numberEdit}
            onSave={handleSaveNumber}
          />
        }
      </div>
      <button
        onClick={() => onDeleteContact(id)}
        className={s.button}
        disabled={loading}
      >
        {loading ? <LoaderButtons /> : 'Delete'}
        <Icon iconName="iconBin" width="18" height="18" className={s.iconBin} />
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
