import React from "react";
import { createStackNavigator, headerStyle, headerTintColor, headerTitleStyle  } from "@react-navigation/stack";

import Mapa from "../screens/Mapa";


const Stack = createStackNavigator();

export default function MapaStack() {
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
                name="Mapa"
                component={Mapa}
                options={{ title: "Mapa" }}
            />
        </Stack.Navigator>
    )
}