import React from "react";
import { View, StyleSheet } from "react-native";

import Formulario from "../componentes/Formulario";

export default function Buscar() {
    return (
        <>
            <View style={styles.buscar}>
                <View style={styles.contenido}>
                    <Formulario />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    buscar: {
        flex: 1,
        backgroundColor: "#87CEFA",
        justifyContent: "center"
    },
    contenido: {
        marginHorizontal: "2.5%"
    },
});


