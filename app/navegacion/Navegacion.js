import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HomeStack from "./HomeStack";
import BuscarStack from "./BuscarStack";
import FavoritosStack from "./FavoritosStack";

// import Home from "../screens/Home";
// import Buscar from "../screens/Buscar";
// import Favoritos from "../screens/Favoritos";


const Tab = createBottomTabNavigator();

export default function Navegacion() {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="home"
                    component={HomeStack}
                    options={{ title: "Home" }}
                />
                <Tab.Screen
                    name="buscar"
                    component={BuscarStack}
                    options={{ title: "Buscar" }}
                />
                <Tab.Screen
                    name="favoritos"
                    component={FavoritosStack}
                    options={{ title: "Favoritos" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}