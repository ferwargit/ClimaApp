import React, { useState } from 'react';
import { LogBox, StatusBar } from "react-native";

import Navegacion from './app/navegacion/Navegacion';
import InicioAnimacion from './app/components/Animaciones/InicioAnimacion';

import { Provider } from 'react-redux';
import store from './app/store/Buscar/index';

LogBox.ignoreLogs(["It appears that", "expo-permissions is"]);


export default function App() {

    const [animated, setAnimated] = useState(false);

    if (!animated)

        return (
            <InicioAnimacion
                setAnimated={setAnimated}
            />
    )

    else

        return (
            <>
                <Provider store={store}>

                    <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
                    <Navegacion />

                </Provider>

            </>
        )
}
