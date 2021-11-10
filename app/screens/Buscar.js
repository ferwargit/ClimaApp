import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Formulario from "../componentes/Formulario";

export default function Home() {
    return (
        <View style={styles.text}>
            
            <Formulario />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});
