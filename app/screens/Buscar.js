import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";

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
        
        const consultarClima = async () => {

            if(consultar) {
                // console.log('Consultando la API...')
                const API_KEY = '930fbf0f18ecc4b596423c7fcd1b5fa2'
                const url = `api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}`
    
                // console.log(url);
    
                try {
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                } catch (error) {
                    mostrarAlerta();
                }
            }
        }
        consultarClima();
    }, [consultar])

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'No hay resultados, intenta con otra ciudad o país',
            [{ text: 'OK'}]
        )
    }

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


