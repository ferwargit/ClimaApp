import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

    // Extraigo el pais y la ciudad
    const { pais, ciudad } = busqueda;

    const consultarClima = () => {
        if ( pais.trim() === '' || ciudad.trim() === '' ) {
            mostrarAlerta();
            return;
        }

        // Si pasa la validacion consultar la API
        guardarConsultar(true);
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Ingresa una ciudad y un país para la busqueda',
            [{ text: 'Entendido'}]
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
            <View>
                <View>
                    <TextInput
                        value={ciudad}
                        style={styles.input}
                        onChangeText={ciudad => guardarBusqueda({ ...busqueda, ciudad })}
                        placeholder="Ciudad"
                        placeholderTextColor="#666"
                    />
                </View>
                <View>
                    <Picker
                        selectedValue={pais}
                        itemStyle={{ height: 120, backgroundColor: '#FFF' }}
                        onValueChange={pais => guardarBusqueda({ ...busqueda, pais})}
                    >
                        <Picker.Item label="-- Seleccione un país --" value="" />
                        <Picker.Item label="Argentina" value="AR" />
                        <Picker.Item label="Colombia" value="CO" />
                        <Picker.Item label="Costa Rica" value="CR" />
                        <Picker.Item label="España" value="ES" />
                        <Picker.Item label="Estados Unidos" value="US" />
                        <Picker.Item label="México" value="MX" />
                        <Picker.Item label="Perú" value="PE" />

                    </Picker>
                </View>

                <TouchableWithoutFeedback
                    onPressIn={() => animacionEntrada()}
                    onPressOut={() => animacionSalida()}
                    onPress={ () => consultarClima()}

                >
                    <Animated.View
                        style={[styles.btnBuscar, estiloAnimacion]}

                    >
                        <Text style={styles.textoBuscar}>Buscar Clima</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor: '#6495ED',
        padding: 10,
        justifyContent: 'center'
    },
    textoBuscar: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    },

});

export default Formulario;