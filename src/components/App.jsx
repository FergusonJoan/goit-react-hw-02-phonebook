import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const initState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: initState,
    filter: '',
  };

  formSubmit = contact => {
    const { contacts } = this.state;
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...contact }],
    }));
  };
  clearContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };
  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalisedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedValue)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        {!!contacts.length ? (
          <>
            <Filter value={filter} onChange={this.onChangeFilter} />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.clearContact}
            />
          </>
        ) : (
          <p>There is no contacts here</p>
        )}
      </div>
    );
  }
}
