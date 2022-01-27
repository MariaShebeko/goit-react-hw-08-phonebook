import Section from 'components/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Toaster } from 'react-hot-toast';

export default function ContactsView() {
  return (
    <>
      <Toaster />

      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
