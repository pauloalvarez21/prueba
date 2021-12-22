import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from './src/views/HomeView';
import DetailsView from './src/views/DetailView';

const Stack = createNativeStackNavigator();



const App = () => {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2941DB'
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="Detail" component={DetailsView} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
