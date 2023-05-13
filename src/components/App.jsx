import React from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';



class App extends React.Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: ''
  }

  componentDidMount() {
    const localStorageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localStorageContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = data => {

    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number
    }

    for (let i = 0; i < this.state.contacts.length; i++) {
      const element = this.state.contacts[i];

      if (element.name === data.name) {
        alert(`${data.name} is already in contacts.`);
        return;
      }
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
    
  }

  deleteContact = contactId => {
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter));
  }

  render() {
    
    const filteredContacts = this.getFilteredContacts();

    return (
      <div style={{padding: '50px'}}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
};

export default App;