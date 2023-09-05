import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
const Contact = ({ contacts }) => {

    const navigation = useNavigation();

    const handleContactPress = (contact) => {
        navigation.navigate('ContactDetails', { contact });
      };
  return (
    <TouchableOpacity style={styles.contactCon} onPress={() => handleContactPress(contacts)}>
      <View style={styles.imgCon}>
        <View style={styles.placeholder}>
          <Text style={styles.txt}>{contacts?.first_name[0]}</Text>
        </View>
      </View>
      <View style={styles.contactDat}>
        <Text style={styles.name}>{contacts?.first_name +" "+ contacts?.last_name}</Text>
        <Text style={styles.phoneNumber}>
        {contacts.phone}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  contactCon: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9d9",
    backgroundColor:'#fff'
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  contactDat: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: "#888",
  },
});
export default Contact;