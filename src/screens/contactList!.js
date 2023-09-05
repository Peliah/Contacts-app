// ContactListScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux'; // Import connect
// import { addContact } from './actions/contacts'; // Import your action

const ContactListScreen = ({ contacts }) => {
    console.log(contacts)
  return (
    <View>
      {contacts.map((contact, index) => (
        <Text key={index}>{contact.name}</Text>
      ))}
      {/* <Button
        title="Add Contact"
        onPress={() => addContact({ name: 'New Contact' })}
      /> */}
    </View>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contactsReducer.contacts, // Map your state to props
});

export default connect(mapStateToProps)(ContactListScreen);
