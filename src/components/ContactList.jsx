import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, onDelete }) {
    return (
        <div className="contact-list">
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    imageUrl={contact.imageUrl}
                    name={contact.name}
                    tag={contact.tag}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default ContactList;