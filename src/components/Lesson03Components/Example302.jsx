import React, { Component } from 'react';

class Example302 extends Component {
    state = {
        contacts: [
            {
                name: 'Jack',
                age: 25,
                skills: 'JavaScript, React',
                email: 'jack@email.com',
                phone: '987-555-0123',
            },
            {
                name: 'Anna',
                age: 29,
                skills: 'Node.js, MongoDB',
                email: 'anna@email.com',
                phone: '987-555-1234',
            },
            {
                name: 'Steve',
                age: 31,
                skills: 'Android App Development',
                email: 'steve@email.com',
                phone: '987-555-2345',
            },
        ],
        contactIndex: -1,
        showContactDetails: false,
    };

    setIndex = (index) => {
        let stateCopy = { ...this.state };
        stateCopy.contactIndex = index;
        stateCopy.showContactDetails = false;
        this.setState(stateCopy);
    };

    showPerson = () => {
        const { contacts, contactIndex, showContactDetails } = this.state;
        return (
            <>
                Name: {contacts[contactIndex].name} <br />
                Age: {contacts[contactIndex].age} <br />
                Skills: {contacts[contactIndex].skills} <br />
                <button
                    className='btn btn-primary m-2'
                    onClick={() => this.showContactDetails()}
                >
                    Contact Info
                </button>
                {showContactDetails ? (
                    <React.Fragment>
                        Email: {contacts[contactIndex].email} <br />
                        Phone: {contacts[contactIndex].phone} <br />
                    </React.Fragment>
                ) : (
                    ''
                )}
            </>
        );
    };

    showContactDetails = (contact) => {
        let stateCopy = { ...this.state };
        stateCopy.showContactDetails = true;
        this.setState(stateCopy);
    };

    render() {
        const { contacts, contactIndex } = this.state;
        return (
            <>
                {contacts.map((contact, index) => (
                    <button
                        className='btn btn-primary m-2'
                        onClick={() => this.setIndex(index)}
                    >
                        {contact.name}
                    </button>
                ))}
                <br />
                {contactIndex >= 0 ? this.showPerson() : ''}
            </>
        );
    }
}

export default Example302;
