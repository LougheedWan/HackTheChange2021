import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';
import Login from './screens/login';
import Dashboard from './screens/dashboard';
import Calendar from './screens/calenderView';
import Stats from './screens/stats';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name= "Login"
          component= {Login}
        />
        <Stack.Screen
          name= "Dashboard"
          component= {Dashboard}
        />
        <Stack.Screen
          name= "Calendar"
          component= {Calendar}
        />
        <Stack.Screen
          name= "Stats"
          component= {Stats}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
