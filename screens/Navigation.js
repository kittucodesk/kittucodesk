// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import ChatScreen from './ChatScreen';
import ChatScreen1 from './ChatScreen1';

 
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown : false}} />
        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown : false}} /> 
        <Stack.Screen name="Screen3" component={Screen3} options={{headerShown : false}} /> 
        <Stack.Screen name="Screen4" component={Screen4} options={{headerShown : false}} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown : false}} />
        <Stack.Screen name="ChatScreen1" component={ChatScreen1} options={{headerShown : false}} />
        {/* <Stack.Screen name="ChatScreen2" component={ChatScreen2} options={{headerShown : false}} /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;