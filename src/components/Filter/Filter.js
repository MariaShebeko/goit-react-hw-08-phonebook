import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = event =>
    dispatch(contactsActions.changeFilter(event.target.value));

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
};

export default Filter;
