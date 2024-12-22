import React from 'react';

class ContactInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tag: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleTagChange(event) {
        this.setState({ tag: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onAddContact(this.state.name, this.state.tag);
        this.setState({ name: '', tag: '' });
    }

    render() {
        return (
            <form className="contact-input" onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    placeholder="Nama"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input
                    type="text"
                    placeholder="Tag"
                    value={this.state.tag}
                    onChange={this.handleTagChange}
                />
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

export default ContactInput;