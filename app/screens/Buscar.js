import React, { useState, useEffect }from "react";
import { StyleSheet, View, Alert } from "react-native";

import Formulario from "../componentes/Formulario";

export default function Home() {

    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    const [consultar, guardarConsultar] = useState(false);
    const [resultado, guardarResultado] = useState({});

    const { ciudad, pais } = busqueda;

    useEffect(() => {
        const consultarClima = async () => {

            if(consultar) {
                // console.log('Consultando la API...')
                const API_KEY = '930fbf0f18ecc4b596423c7fcd1b5fa2'
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}`
                // console.log(url);
    
                try {
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    // console.log(resultado);
                    guardarResultado(resultado);
                    guardarResultado(false);
                } catch (error) {
                    mostrarAlerta();
                }
    
            }

        }
        consultarClima();
    }, [consultar]);

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'No hay resultados, intenta con otro país o ciudad',
            [{text: 'Ok'}]
        )
    }

    return (
        <View style={styles.text}>
            
            <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgb(71, 149, 212)',
    }
});
