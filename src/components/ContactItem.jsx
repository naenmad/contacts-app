import React, { useState } from 'react';

const ContactItem = ({ contact, onSaveClick, onDeleteClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: contact.name, username: contact.username });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveClick = () => {
    if (!formData.name || !formData.username) {
      setError('Name and Username are required');
      return;
    }
    onSaveClick(contact.id, formData);
    setIsEditing(false);
    setError('');
  };

  return (
    <div className="contact-item">
      <div className="contact-item__image">
        <img src={`https://i.pravatar.cc/150?u=${contact.id}`} alt={contact.name} />
      </div>
      <div className="contact-item__body">
        {isEditing ? (
          <>
            <label className="contact-item__label" htmlFor={`name-${contact.id}`}>Name</label>
            <input
              id={`name-${contact.id}`}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="contact-item__input"
              placeholder="Name"
            />
            <label className="contact-item__label" htmlFor={`username-${contact.id}`}>Username</label>
            <input
              id={`username-${contact.id}`}
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="contact-item__input"
              placeholder="Username"
            />
            {error && <p className="error">{error}</p>}
            <button className="contact-item__save" onClick={handleSaveClick}>
              Save
            </button>
          </>
        ) : (
          <>
            <div className="contact-item__title">{contact.name}</div>
            <div className="contact-item__username">@{contact.username}</div>
          </>
        )}
      </div>
      {isEditing ? null : (
        <>
          <button className="contact-item__edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="contact-item__delete" onClick={() => onDeleteClick(contact.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default ContactItem;