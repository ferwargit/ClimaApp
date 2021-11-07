import React from "react";
import { createStackNavigator, headerTintColor, HeaderTitle } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

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
                options={{ title: "Home"} }
                
            />
        </Stack.Navigator>
    )
}
