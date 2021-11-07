import React from 'react';
import { LogBox } from "react-native";
import Navegacion from './app/navegacion/Navegacion';

LogBox.ignoreLogs(["It appears that"]);


export default function App() {
  return (
    <Navegacion />
  );
}


