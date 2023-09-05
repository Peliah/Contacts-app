import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddContact = () => {
  return (
    <View style={styles.container}>
      <Text>AddContact</Text>
    </View>
  )
}

export default AddContact

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        padding:16
    }
})