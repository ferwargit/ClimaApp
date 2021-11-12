import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Formulario from "../componentes/Formulario";

export default function Buscar() {

    const [ busqueda, guardarBusqueda ] = useState({
        ciudad: '',
        pais: ''
    });

    // Consulta a la API
    const [ consultar, guardarConsultar ] = useState(false);

    const { ciudad, pais } = busqueda;

    useEffect(() => {
        if(consultar) {
            // console.log('Consultando la API...')
            const API_KEY = ''
            const url = `api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}`

            console.log(url);
        }

        

    }, [consultar])

    return (
        <>
            <View style={styles.buscar}>
                <View style={styles.contenido}>
                    <Formulario
                        busqueda={busqueda}
                        guardarBusqueda={guardarBusqueda}
                        guardarConsultar={guardarConsultar}
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


