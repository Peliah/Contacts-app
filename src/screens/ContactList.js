import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Contact from '../components/Contact';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Contacts from 'expo-contacts'
// import { head } from 'lodash';
const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === "granted") {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.PHONE_NUMBERS],
            });
            if (data.length > 0) {
              setContacts(data);
              console.log(data);
            }
          }
        })();
      }, []);

      const keyExtractor = (item, idx) => {
        return item?.id?.toString() || idx.toString();
      };
      const renderItem = ({ item, index }) => {
        return <Contact contact={item} />;
      };
    
    //   const filteredContacts = contacts.filter(contact =>
    //     contact.givenName.toLowerCase().includes(searchText.toLowerCase())
    //   );
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TextInput
                style={styles.input}
                placeholder="Search contacts..."
                value={searchText}
                onChangeText={text => setSearchText(text)}
            />
            <Icon name='ellipsis-vertical-outline' size={30}/>
        </View>
      <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
    />
    <TouchableOpacity style={styles.button}>
        <Icon name='add-outline' size={32}/>
      </TouchableOpacity>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        marginTop:40,
      },
      header:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        marginBottom: 16,
        justifyContent:'center'
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        width:'90%'
      },
      contactItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 12,
      },
      contactName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      list: {
        flex: 1,
        backgroundColor:'white',

      },
      button: {
        position: 'absolute',
        bottom: 20, // Adjust this value to control the vertical position
        right: 20, // Adjust this value to control the horizontal position
        backgroundColor: '#0074d9', // Change the background color as needed
        padding: 10,
        borderRadius: 30,
      },
    
})