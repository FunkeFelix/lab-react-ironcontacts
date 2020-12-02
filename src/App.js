import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contactList: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    const rng = Math.floor(Math.random() * contacts.length);
    const newContactList = [...this.state.contactList, contacts[rng]];
    this.setState({
      contactList: newContactList,
    });
  };

  sortByName = () => {
    const sortedContacts = this.state.contactList.sort((contactA, contactB) => {
      return contactA.name > contactB.name ? 1 : -1;
    });
    this.setState({
      contactList: sortedContacts,
    });
  };

  sortByPopularity = () => {
    const sortedPopularity = this.state.contactList.sort(
      (contactA, contactB) => {
        return contactA.popularity < contactB.popularity ? 1 : -1;
      }
    );
    this.setState({
      contactList: sortedPopularity,
    });
  };

  deleteContact = (index) => {
    console.log(index);
    const reducedContactList = this.state.contactList.filter(
      (contact, contactIndex) => {
        return contactIndex !== index;
      }
    );
    this.setState({
      contactList: reducedContactList,
    });
  };
  render() {
    console.log('state log', this.state.contactList);

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button type="button" onClick={this.addRandomContact}>
          Add random Contact
        </button>{' '}
        <button type="button" onClick={this.sortByName}>
          Sort by Name
        </button>{' '}
        <button type="button" onClick={this.sortByPopularity}>
          Sort by Popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactList.map((contact, index) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      style={{ height: '70px' }}
                    />
                  </td>
                  <td> {contact.name} </td>
                  <td> {Math.floor(contact.popularity * 100) / 100}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.deleteContact(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
