import React, { Component } from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react";
import Contacts from "./Contacts"

class App extends Component {
  state = { 
    contacts: [
      { id: 1, firstName: "Jerry", phone: "801-121-5656", },
      { id: 2, firstName: "George", phone: "626-567-1872", },
      { id: 3, firstName: "Cosmo", phone: "802-134-9876", },
    ],
  };
  render() {
    return (
      <Container>
        <Header as="h1">React Contact List</Header>
        <Contacts contacts={this.state.contacts}/>
      </Container>
    );
  }
}

export default App;