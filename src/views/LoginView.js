import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import { Typography, TextField, FormControl, Button } from '@mui/material';

// const GOOGLE_CLIENT_ID =
//   '938317961173-3kctvbgebkvgtc48bfibsmsooqpasfo3.apps.googleusercontent.com';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
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
          Log In
        </Typography>

        <TextField
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          id="outlined-email"
          label="Email"
          variant="outlined"
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
          Sign In
        </Button>
      </FormControl>
    </>
  );
}
