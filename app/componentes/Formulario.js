import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Text, Animated, Alert } from "react-native";
import { Picker } from "@react-native-community/picker";




const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

    const { pais, ciudad } = busqueda;

    const consultarClima = () => {
        if(pais.trim() === '' || ciudad.trim() === '') {
            mostrarAlerta();
            return;
        }

        // consultar la API
        guardarConsultar(true);
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Ingrese un país y una ciudad para la búsqueda',
            [{text: 'Entendido'}]
        )
    }


    const [animacionboton] = useState(new Animated.Value(1));

    const animacionEntrada = () => {
        Animated.spring(animacionboton, {
            toValue: .75,
            useNativeDriver: false
        }).start();
    }

    const animacionSalida = () => {
        Animated.spring(animacionboton, {
            toValue: 1,
            useNativeDriver: false,
            friction: 4,
            tension: 30
        }).start();
    }

    const estiloAnimacion = {
        transform: [{ scale: animacionboton }]
    }

    return (
        <>
            <View style={styles.app}>
                <View style={styles.contenido}>


                    <View style={styles.formulario}>

                        <View>
                            <Picker
                                selectedValue={pais}
                                itemStyle={{ height: 120, backgroundColor: '#FFF' }}
                                onValueChange={pais => guardarBusqueda({
                                    ...busqueda, pais
                                })}
                            >
                                <Picker.Item label="SELECCIONE UN PAIS" value="" />
                                <Picker.Item label="Argentina" value="AR" />
                                <Picker.Item label="Colombia" value="CO" />
                                <Picker.Item label="Costa Rica" value="CR" />
                                <Picker.Item label="España" value="ES" />
                                <Picker.Item label="Estados Unidos" value="US" />
                                <Picker.Item label="México" value="MX" />
                                <Picker.Item label="Perú" value="PE" />
                            </Picker>
                        </View>

                        <View>
                            <TextInput
                                value={ciudad}
                                style={styles.input}
                                onChangeText={ciudad => guardarBusqueda({
                                    ...busqueda, ciudad
                                })}
                                placeholder="Ingrese Ciudad"
                                placeholderTextColor="#666"
                            />
                        </View>

                        <TouchableWithoutFeedback
                            onPressIn={() => animacionEntrada()}
                            onPressOut={() => animacionSalida()}
                            onPress={() => consultarClima()}
                        >
                            <Animated.View
                                style={[styles.btnBuscar, estiloAnimacion]}
                            >
                                <Text style={styles.textoBuscar}>       Buscar Clima        </Text>
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>



                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: 'rgb(71, 149, 212)',
        justifyContent: 'center'
    },
    contenido: {
        marginHorizontal: '2.5%'
    },
    input: {
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: '#7FB3D5',
        padding: 10,
        justifyContent: 'center'
    },
    textoBuscar: {
        color: "#FFF",
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    }
})

export default Formulario;