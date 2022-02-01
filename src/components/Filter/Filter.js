import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import { Box, TextField } from '@mui/material';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = event =>
    dispatch(contactsActions.changeFilter(event.target.value));

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-search"
          label="Find contacts by name"
          type="search"
          variant="standard"
          value={value}
          onChange={onChange}
        />
      </Box>
    </>
  );
};

export default Filter;
