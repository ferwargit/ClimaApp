import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Linking,
  TouchableOpacity
} from "react-native";

export default function QuienesSomos() {
  const ReySalazar = `https://www.linkedin.com/in/rey-salazar/`;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>¿Quiénes somos?</Text>
      <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/yamila-paz-b-38b169215/")}>
        <Text style={{ color: "blue" }}>* Yamila Bulich</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL("https://linkedin.com/in/fernando-warno/")}>
        <Text style={{ color: "blue" }}>* Fernando Warno</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/rey-salazar/")}>
        <Text style={{ color: "blue" }}>* Rey Salazar</Text>
      </TouchableOpacity>
      <Text style={styles.textTitle}>Acerca de la aplicación</Text>
      <Text style={styles.instructions}>
        Proyecto grupal de una aplicación móvil desarrollada en React Native.
        Diseñada para la busqueda del clima en ciudades de todo el mundo.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#B3E5FC",
    padding: 12,
  },
  instructions: {
    paddingTop: 5,
    paddingBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "left",
    fontFamily: "notoserif",
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "normal",
    textAlign: "left",
    fontFamily: "notoserif",
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
  
});
