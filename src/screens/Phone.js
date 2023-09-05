import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Phone = () => {
  return (
    <View style={styles.container}>
      <Text>Phone</Text>
    </View>
  )
}

export default Phone

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        padding:16
    }
})