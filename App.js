import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import Contact from './src/screens/Contact';
import ContactList from './src/screens/ContactList';
import ContactsForm from './src/screens/ContactsForm';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false, }} initialRouteName='ContactList'>
        <Stack.Screen name='ContactList' component={ContactList}/>
        <Stack.Screen name='Contact' component={Contact}/>
        <Stack.Screen name='ContactsForm' component={ContactsForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
