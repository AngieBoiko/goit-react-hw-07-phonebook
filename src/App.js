import React from 'react';
import Contacts from './components/Contacts';
import Form from './components/Form';
import Filter from './components/Filter';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
