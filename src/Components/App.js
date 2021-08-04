import React, { Component } from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

class App extends Component {
    state = {
        contacts: [],
        items: [],
        filter: ''

      }
    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm/>
                <h2>Contacts</h2>
                <Filter/>
                <ContactList />

            </div>
        );
    }
}

export default App;