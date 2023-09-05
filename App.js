/***********************************************************************/
/************************This Code is Writted and***********************/
/************************      Edited By         ***********************/
/************************       Peliah           ***********************/
/***********************************************************************/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import ContactDetails from './src/screens/ContactDetails';
import ContactList from './src/screens/ContactList';
import ContactListScreen from './src/screens/contactList!';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
// import store from './src/redux1/store';
import TabNavigation from './src/components/TabNavigation'
import AddContact from './src/screens/AddContact';
// import { createStore } from 'r';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false, }}>
          <Stack.Screen name='TabNavigation' component={TabNavigation}/>
          {/* <Stack.Screen name='ContactList' component={ContactListScreen}/> */}
          <Stack.Screen name='ContactList' component={ContactList}/>
          <Stack.Screen name='ContactDetails' component={ContactDetails}/>
          {/* <Stack.Screen name='ContactsForm' component={ContactsForm}/> */}
          <Stack.Screen name='AddContact' component={AddContact}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
