import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Contact from '../components/Contact';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import * as Contacts from 'expo-contacts'
import { connect } from 'react-redux';
import { addContact } from '../redux/ContactAction';
// import { head } from 'lodash';
const ContactList = ({contacts}) => {
    // const [contacts, setContacts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation();
    console.log({contacts})

    // useEffect(() => {
    //     (async () => {
    //       const { status } = await Contacts.requestPermissionsAsync();
    //       if (status === "granted") {
    //         const { data } = await Contacts.getContactsAsync({
    //           fields: [Contacts.PHONE_NUMBERS],
    //         });
    //         if (data.length > 0) {
    //           setContacts(data);
    //           console.log(data);
    //         }
    //       }
    //     })();
    //   }, []);

      const keyExtractor = (item, idx) => {
        return item?.id?.toString() || idx.toString();
      };
      const renderItem = ({ item, index }) => {
        return <Contact contacts={item} />;
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
      keyExtractor={(contact) => contact.id.toString()}
      style={styles.list}
    />
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddContact')} >
        <Icon name='add-outline' size={32}/>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contact.contacts, // Adjust the slice name as needed
  };
};


export default connect(mapStateToProps)(ContactList)

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