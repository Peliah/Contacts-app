import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import ContactList from './../screens/ContactList'
import Phone from './../screens/Phone'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({ 
        headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Contacts') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Phone') {
            iconName = focused ? 'call' : 'call-outline';
          } 

          return <Icon name={iconName} size={size} color={color} />;
        },
        "tabBarActiveTintColor": "#0074d9",
        "tabBarInactiveTintColor": "gray",
        "tabBarStyle": [
            {
            "display": "flex",
            // "margin":5,
            height:60,
            // padding:50,
            borderRadius:10
            },
            null
        ]
      })}
      >
      <Tab.Screen name="Phone" component={Phone} />
      <Tab.Screen name="Contacts" component={ContactList} />
    </Tab.Navigator>
  )
}

export default TabNavigation

// const styles = StyleSheet.create({})