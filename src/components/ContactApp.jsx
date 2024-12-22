import React, { useState } from 'react';
import ContactItem from './ContactItem';
import contactIcon from '/contact-icon.svg';

const ContactApp = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', username: 'johndoe' },
    { id: 2, name: 'Jane Smith', username: 'janesmith' },
  ]);
  const [formData, setFormData] = useState({ name: '', username: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.username) {
      setNotification({ message: 'Name and Username are required', type: 'error' });
      return;
    }
    setContacts([...contacts, { id: Date.now(), ...formData }]);
    setFormData({ name: '', username: '' });
    setNotification({ message: 'Contact added successfully', type: 'success' });
  };

  const handleSaveClick = (id, updatedData) => {
    if (!updatedData.name || !updatedData.username) {
      setNotification({ message: 'Name and Username are required', type: 'error' });
      return;
    }
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, ...updatedData } : contact
      )
    );
    setNotification({ message: 'Contact updated successfully', type: 'success' });
  };

  const handleDeleteClick = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    setNotification({ message: 'Contact deleted successfully', type: 'success' });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-app">
      <img src={contactIcon} alt="Contact Icon" className="contact-icon" />
      <h1>Contact List</h1>
      <form className="contact-input" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <button type="submit">Add Contact</button>
      </form>
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <input
        type="text"
        placeholder="Search Contacts"
        value={searchTerm}
        onChange={handleSearchChange}
        className="contact-search"
      />
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onSaveClick={handleSaveClick}
          onDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  );
};

export default ContactApp;