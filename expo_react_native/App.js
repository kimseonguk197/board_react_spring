import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // createStackNavigator import 추가
import Home from './components/Home';
import AuthorList from './components/AuthorList';

const Stack = createStackNavigator(); // createNativeStackNavigator -> createStackNavigator로 변경

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AuthorList" component={AuthorList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
