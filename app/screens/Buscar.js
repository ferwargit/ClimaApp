import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Formulario from "../componentes/Formulario";

export default function Buscar() {

    const [ busqueda, guardarBusqueda ] = useState({
        ciudad: '',
        pais: ''
    });

    return (
        <>
            <View style={styles.buscar}>
                <View style={styles.contenido}>
                    <Formulario
                        busqueda={busqueda}
                        guardarBusqueda={guardarBusqueda}
                    />
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


