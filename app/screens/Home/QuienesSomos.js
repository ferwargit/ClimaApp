import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default class QuienesSomos extends Component {

    render() {

        return (


            <SafeAreaView style={styles.container}>

                <Text style={styles.textTitle}>¿Quiénes somos?</Text>
                <Text>
                    <View style={styles.instructions}>
                        <FlatList
                            data={[
                                { key: ' *  Yamila Bulich' },
                                { key: ' *  Jonathan Pardo' },
                                { key: ' *  Rey Salazar' },
                                { key: ' *  Fernando Warno' },
                            ]}
                            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                        />
                    </View>
                </Text>
                <ScrollView>
                    <Text style={styles.textTitle}>Acerca de la aplicación</Text>
                    <Text style={styles.instructions}>
                        Proyecto grupal desarrollado en el Curso de especialización en desarrolo mobile - Codo a Codo | IBM Skillsbuild, en Noviembre de 2021.</Text>
                    <Text style={styles.instructions}>
                        Aplicación diseñada para la busqueda del clima en ciudades de todo el mundo.</Text>
                    <Text style={styles.instructions}>Se desarrollo código propio con base de información en la documentación de React-Native, plataforma Udemy y Google. También se reutilizo código de las siguientes fuentes:</Text>
                    <Text style={styles.textTitle}>Presentación</Text>
                    
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this._handleOpenWithWebBrowser}>
                        <Text style={{textAlign: 'center'}}>3° Webinar: Interfaz gráfica con React Native   Codo a Codo & IBM</Text>
                    </TouchableOpacity>
                    
                    <Text style={styles.textTitle}>Navegación</Text>
                    
                    <TouchableOpacity
                        style={styles.btnUdemy}
                        onPress={this._handleOpenWithWebBrowserUdemy}
                    ><Text style={{textAlign: 'center'}}>Udemy</Text>
                    </TouchableOpacity>

                    <Text style={styles.instructions}>Curso: React Native Expo: Creando un TripAdvisor de Restaurantes - Sección 5: Sistema de Navegación</Text>
                    <Text style={styles.textTitle}>Buscar</Text>
                    
                    <TouchableOpacity
                        style={styles.btnBuscar}
                        onPress={this._handleOpenWithWebBrowserBuscar}
                    >
                    <Text style={styles.instructions}>Weather App with React Native & Redux using openweathermap api</Text>
                    </TouchableOpacity>
                    
                    <Text style={styles.textTitle}>Ciudades</Text>
                    <Text style={styles.instructions}>Flatlist React Native - Create a brewery app using API - Part 1</Text>
                    <Text>https://www.youtube.com/watch?v=rYkTdax5ESg</Text>
                    <Text style={styles.instructions}>Search in FlatList React Native - Create a brewery app using API - Part 2</Text>
                    <Text>https://www.youtube.com/watch?v=L96tOfz3YnU</Text>
                    <Text style={styles.instructions}>#12 Fetching Json data in React Native</Text>
                    <Text>https://www.youtube.com/watch?v=5vFgqCfggC0</Text>
                    <Text style={styles.textTitle}>Tecnologías/Conceptos usados</Text>
                    <Text style={styles.instructions}>Lenguaje de programación: React-Native</Text>
                    <Text style={styles.instructions}>Toolkit: Expo CLI</Text>
                    <Text style={styles.instructions}>Fuente de datos: API https://openweathermap.org/</Text>
                    <Text style={styles.instructions}>Versionado de código: Git y GitHub</Text>
                </ScrollView>





            </SafeAreaView >




        )
    }

    _handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=QA-6-mmJFDo');
    };
    _handleOpenWithWebBrowserUdemy = () => {
        WebBrowser.openBrowserAsync('https://www.udemy.com/');
    };
    _handleOpenWithWebBrowserBuscar = () => {
        WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=Af36ojofSQE&t=287s');
    };
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#B3E5FC',
        padding: 12
    },
    instructions: {
        paddingTop: 3,
        paddingBottom: 3,
        marginRight: 0,
        marginLeft: 0,
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        fontFamily: 'notoserif',

    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'center',
        fontFamily: 'notoserif',
        color: '#0277BD'

    },
    item: {
        padding: 5,
        fontSize: 16,

    },
    btn: {
        //flex: 1,
        elevation: 5,
        backgroundColor: '#00aaff',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 90,
        padding: 8,
        width: '90%'
    },
    btnUdemy: {
        //flex: 1,
        elevation: 5,
        backgroundColor: '#00aaff',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 90,
        padding: 8,
        width: '30%'
    },
    btnBuscar: {
        //flex: 1,
        elevation: 5,
        backgroundColor: '#00aaff',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 90,
        padding: 8,
        width: '90%'
    }

});