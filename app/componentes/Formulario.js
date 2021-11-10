import React from "react";
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { Picker } from "@react-native-community/picker";




const Formulario = () => {

    return (
        <>
            <View style={styles.app}>
                <View style={styles.contenido}>


                    <View style={styles.formulario}>

                        <View>
                            <Picker
                                itemStyle={{ height: 120, backgroundColor: '#FFF' }}
                            >
                                <Picker.Item label="SELECCIONE UN PAIS" value="" />
                                <Picker.Item label="Estados Unidos" value="US" />
                                <Picker.Item label="México" value="MX" />
                                <Picker.Item label="Argentina" value="AR" />
                                <Picker.Item label="Colombia" value="CO" />
                                <Picker.Item label="Costa Rica" value="CR" />
                                <Picker.Item label="España" value="ES" />
                                <Picker.Item label="Perú" value="PE" />
                            </Picker>
                        </View>

                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Ingrese Ciudad"
                                placeholderTextColor="#666"
                            />
                        </View>

                        <TouchableWithoutFeedback>
                            <View
                                style={styles.btnBuscar}
                            >
                                <Text style={styles.textoBuscar}>       Buscar Clima        </Text>
                            </View>
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
        backgroundColor: '#000',
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