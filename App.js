import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entry from './screens/Entry';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import UserProfile from './screens/UserProfile';
import Profile from './screens/Profile';
import Book from './screens/Book';







const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Entry"
        screenOptions={{
          headerShown: false, // This hides the header globally for all screens
        }}
      >

        <Stack.Screen name="Entry" component={Entry} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User" component={UserProfile} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Book" component={Book} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;