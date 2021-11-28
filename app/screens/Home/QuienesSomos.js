import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, Linking, TouchableOpacity } from 'react-native';

export default class QuienesSomos extends Component {

  render() {

    return (

      <SafeAreaView style={styles.container}>

        <Text style={styles.textTitle}>¿Quiénes somos?</Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/yamila-paz-b-38b169215/")}>
          <Text style={{ color: "#01579B" }}>* Yamila Bulich</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/jonathan-pardo-4797891a3/")}>
          <Text style={{ color: "#01579B" }}>* Jonathan Pardo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/rey-salazar/")}>
          <Text style={{ color: "#01579B" }}>* Rey Salazar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://linkedin.com/in/fernando-warno/")}>
          <Text style={{ color: "#01579B" }}>* Fernando Warno</Text>
        </TouchableOpacity>

        <ScrollView>
          <Text style={styles.textTitle}>Acerca de la aplicación</Text>
          <Text style={styles.instructions}>
            Proyecto grupal desarrollado en el Curso de especialización en desarrolo mobile - Codo a Codo | IBM Skillsbuild, en Noviembre de 2021.</Text>
          <Text style={styles.instructions}>
            Aplicación diseñada para la busqueda del clima en ciudades de todo el mundo.</Text>
          <Text style={styles.instructions}>Se desarrollo código con base de información en la documentación de React-Native, plataforma Udemy y Google. También se reutilizo código de las siguientes fuentes:</Text>
          <Text style={styles.textTitle}>Presentación</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.youtube.com/watch?v=QA-6-mmJFDo")}>
            <Text style={{ color: '#01579B', textAlign: 'center' }}>* 3° Webinar: Interfaz gráfica con React Native        Codo a Codo & IBM</Text>
          </TouchableOpacity>
          <Text style={styles.textTitle}>Navegación</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.udemy.com/")}>
            <Text style={{ color: '#01579B', textAlign: 'center' }}>* Udemy</Text>
          </TouchableOpacity>
          <Text style={styles.instructions}>Curso: React Native Expo: Creando un TripAdvisor de Restaurantes - Sección 5</Text>
          <Text style={styles.textTitle}>Buscar</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.youtube.com/watch?v=Af36ojofSQE&t=287s")}>
            <Text style={{ color: '#01579B', textAlign: 'center' }}>* Weather App with React Native & Redux using openweathermap api</Text>
          </TouchableOpacity>
          <Text style={styles.textTitle}>Mapa</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.udemy.com/")}>
            <Text style={{ color: '#01579B', textAlign: 'center' }}>Udemy</Text>
          </TouchableOpacity>
          <Text style={styles.instructions}>Curso: React Native Expo: Creando un TripAdvisor de Restaurantes - Sección 9</Text>
          <Text style={styles.textTitle}>Tecnologías/Conceptos</Text>
          <Text style={styles.instructions}>Lenguaje de programación: React-Native</Text>
          <Text style={styles.instructions}>Toolkit: Expo CLI / Figma</Text>
          <Text style={styles.instructions}>Fuente de datos: API</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://openweathermap.org/")}>
            <Text style={{ color: '#01579B', textAlign: 'center' }}>https://openweathermap.org/</Text>
          </TouchableOpacity>
          <Text style={styles.instructions}>Versionado de código: Git y GitHub</Text>
        </ScrollView>

      </SafeAreaView >

    )
  }
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
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: 'notoserif',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'notoserif',
    color: '#039BE5'
  },

});