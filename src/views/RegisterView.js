import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Typography, TextField, FormControl, Button } from '@mui/material';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <FormControl
        component="form"
        onSubmit={handleSubmit}
        sx={{
          marginTop: 20,
        }}
        autoComplete="off"
        variant="outlined"
        margin="normal"
      >
        <Typography variant="h2" component="h2">
          Register
        </Typography>

        <TextField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id="outlined-name"
          label="Name"
          variant="outlined"
          margin="normal"
        />

        <TextField
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          id="outlined-email"
          label="Email"
          variant="outlined"
          helperText="We'll never share your email."
          margin="normal"
        />

        <TextField
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          id="outlined-password-input"
          label="Password"
          autoComplete="current-password"
          margin="normal"
        />

        <Button type="submit" variant="contained">
          Sign up
        </Button>
      </FormControl>
    </>
  );
}
