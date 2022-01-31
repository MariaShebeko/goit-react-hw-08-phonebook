import { Container, Typography, Stack } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import image from '../images/home-image.jpg';
import 'animate.css';

const HomeView = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="row">
          <Typography variant="h1" component="h1" mt={20} align={'center'}>
            YOUR PHONE BOOK
          </Typography>
          <img src={image} alt="homeImage" style={{ marginTop: '90px' }} />
        </Stack>
        <Stack direction="row" justifyContent={'center'}>
          <Typography variant="h6" component="h1" mt={10} color={'#4f95da'}>
            Put all your contacts in one place and you'll never forget them...{' '}
            <PhoneInTalkIcon className={'animate__animated animate__bounce'} />
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default HomeView;
