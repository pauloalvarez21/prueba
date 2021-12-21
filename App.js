import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from './src/views/HomeView';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeView">
        <Stack.Screen name="Home" component={HomeView}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
