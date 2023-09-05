import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { addContact } from '../redux/ContactAction'
import { connect } from 'react-redux'

const AddContact = ({ addContact, navigation }) => {
  const [userInfo, setUserInfo] = useState({
    first_name:'',
    last_name:'',
    email:'',
    company:'',
    phone:'',
    country:'',
    state:'',
  })

  const { first_name, last_name,email, company, phone, country, state  } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const handleAddContact = () => {
    // Create a new contact object
    const newContact = {
      id: Math.random().toString(), // You can generate a unique ID using a library or backend API
      first_name, last_name,email, company, phone, country, state 
    };

    // Dispatch the action to add the contact
    addContact(newContact);

    // Navigate back to the ContactList screen
    navigation.goBack();
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='close-outline' size={25} tyle={{fontWeight:'bold'}} onPress={() => navigation.goBack()} />
        <Text style={{fontWeight:'bold'}}>Create Contact</Text>
        <Icon name='checkmark-outline' size={25} tyle={{fontWeight:'bold'}} onPress={handleAddContact} />
      </View>
      <View style={styles.forms}>
        <TextInput placeholder='First Name' value={first_name} style={styles.input} onChangeText={value => handleOnChangeText(value, 'first_name')} autoCapitalize='words'/>
        <TextInput placeholder='Last Name' value={last_name} style={styles.input} onChangeText={value => handleOnChangeText(value, 'last_name')} autoCapitalize='words'/>
        <TextInput placeholder='Phone' value={phone} style={styles.input} onChangeText={value => handleOnChangeText(value, 'phone')} keyboardType='phone-pad'/>
        <TextInput placeholder='Email' value={email} style={styles.input} onChangeText={value => handleOnChangeText(value, 'email')} autoCapitalize='none'/>
        <TextInput placeholder='Company' value={company} style={styles.input} onChangeText={value => handleOnChangeText(value, 'company')} autoCapitalize='words'/>
        <TextInput placeholder='Country' value={country} style={styles.input} onChangeText={value => handleOnChangeText(value, 'country')} autoCapitalize='words'/>
        <Button title="Add Contact" onPress={handleAddContact} />
      </View>
    </View>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
  };
}

export default connect(null, mapDispatchToProps)(AddContact);

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        padding:16,
        // alignItems:'center',
    },
    forms:{
      alignItems: 'center',
      justifyContent:'center',
      marginTop:50
    },
    input:{
      borderWidth: 1,
      borderColor: '#0074d9',
      // height: 35,
      borderRadius: 15,
      fontSize: 16,
      paddingLeft: 20,
      paddingVertical:15,
      width:'80%',
      marginBottom: 20,
    },
    header:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:16,
      borderBottomWidth:0.2,
      paddingBottom:10,
      // gap:10
    },
    loginLabel:{
      // flexDirection:'row',
      // justifyContent:'flex-end',
      // marginBottom:5,
      marginBottom: 20,
    },
})