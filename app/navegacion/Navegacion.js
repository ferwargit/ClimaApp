import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements/dist/icons/Icon";

import HomeStack from "./HomeStack";
import BuscarStack from "./BuscarStack";
import FavoritosStack from "./FavoritosStack";
import MapaStack from "./MapaStack";


const Tab = createBottomTabNavigator();

export default function Navegacion() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="home"
                tabBarOptions={{
                    inactiveTintColor: "#646464",
                    activeTintColor: "#00aaff",
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                })}
            >
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
                    name="mapa"
                    component={MapaStack}
                    options={{ title: "Mapa" }}
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

function screenOptions(route, color) {
    
    let iconName;

    switch (route.name) {
        
        case "home":
            iconName = "home-outline";
            break;
        case "buscar":
            iconName = "magnify";
            break;
        case "favoritos":
            iconName = "star";
            break;
        case "mapa":
            iconName = "map-marker-outline";
            break;
        default:
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={30} color={color} />
    );
}