import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import ContactDetails from './src/screens/ContactDetails';
import ContactList from './src/screens/ContactList';
// import ContactsForm from './src/screens/ContactsForm';
import TabNavigation from './src/components/TabNavigation'
import AddContact from './src/screens/AddContact';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false, }}>
        <Stack.Screen name='TabNavigation' component={TabNavigation}/>
        <Stack.Screen name='ContactList' component={ContactList}/>
        <Stack.Screen name='ContactDetails' component={ContactDetails}/>
        {/* <Stack.Screen name='ContactsForm' component={ContactsForm}/> */}
        <Stack.Screen name='AddContact' component={AddContact}/>
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
