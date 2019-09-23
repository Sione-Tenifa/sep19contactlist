import React from "react";
import { Button, Table, } from "semantic-ui-react";

const Contacts = ({ contacts }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        contacts.map( contact => ( 
          <Contact key={contact.id} {...contact} />
        ))
      }
    </Table.Body>
  </Table>
);

export default Contacts;