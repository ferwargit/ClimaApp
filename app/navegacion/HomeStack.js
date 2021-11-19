import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import QuienesSomos from '../screens/Home/QuienesSomos';
import Home from "../screens/Home";


const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00aaff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{ title: "Home" }}
      />

      <Stack.Screen
        name="quienes somos"
        component={QuienesSomos}
        options={{ title: "¿Quiénes somos?" }}
      />

    </Stack.Navigator>
  )
}
