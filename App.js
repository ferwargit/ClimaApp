import React from 'react';
import { LogBox, StatusBar } from "react-native";
import Navegacion from './app/navegacion/Navegacion';

import { Provider } from 'react-redux';
import store from './app/store/Buscar/index';

LogBox.ignoreLogs(["It appears that"]);


export default function App() {
    return (
        <>
            <Provider store={store}>

                <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
                <Navegacion />

            </Provider>
        </>
    );
}


