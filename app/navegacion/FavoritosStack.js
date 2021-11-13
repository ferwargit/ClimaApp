import React from "react";
import { createStackNavigator, headerStyle, headerTintColor, headerTitleStyle  } from "@react-navigation/stack";

import Favoritos from "../screens/Favoritos";


const Stack = createStackNavigator();

export default function FavoritosStack() {
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
                name="Favoritos"
                component={Favoritos}
                options={{ title: "Favoritos" }}
            />
        </Stack.Navigator>
    )
}