import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import InGame from '../screens/InGame'

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="InGame" component={InGame} />
    </Stack.Navigator>
);