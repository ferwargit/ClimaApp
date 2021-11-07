import React from 'react';
import { LogBox, StatusBar } from "react-native";
import Navegacion from './app/navegacion/Navegacion';

LogBox.ignoreLogs(["It appears that"]);


export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff"  />
      <Navegacion />
    </>
  );
}


