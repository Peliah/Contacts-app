import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

const Contact = ({route}) => {
    const navigation = useNavigation();
    const {contact} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='arrow-back-outline' size={25} onPress={() => navigation.goBack()} />
        <View style={styles.headerLeft}>
          <Icon name='create-outline' size={25}/>
          <Icon name='star-outline' size={25}/>
          <Icon name='ellipsis-vertical-outline' size={25}/>
        </View>
      </View>
      <View style={styles.midBod1}>
        <View style={styles.midBod1Letter}>
          <Text style={{fontSize:50, fontWeight:'400'}}>{contact.name[0]}</Text>
        </View>
        <View style={{alignItems:'center', justifyContent:'center'}}>
          <Text style={{alignItems:'center', justifyContent:'center'}}>{contact.name}</Text>
          <Text style={{alignItems:'center', justifyContent:'center'}}>{contact.company}</Text>
        </View>
      </View>
      <View style={styles.midBodOptions}>
        <Icon name='call-outline' size={32} color={'#0074d9'}/>
        <Icon name='call-outline' size={32} color={'#0074d9'}/>
        <Icon name='call-outline' size={32} color={'#0074d9'}/>
      </View>
      <View style={styles.belowBodOptions}></View>
      <Text>{contact.name}</Text>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:30,
    padding:16
},
header:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  marginBottom:16,
  borderBottomWidth:0.2,
  paddingBottom:10
},
headerLeft:{
  flexDirection:'row',
  gap:30
},
midBod1:{
  alignItems:'center',
  justifyContent:'center',
  // height: window.screenY/3
  marginBottom:16,
  borderBottomWidth:0.2,
  paddingBottom:20
},
midBod1Letter:{
  width:120,height:120,
  // padding:50,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'gray',
  borderRadius:100,
  margin:30
},
midBodOptions:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-evenly'
}
})