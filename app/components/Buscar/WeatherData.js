/* eslint-disable prettier/prettier */
import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

import { useState, useEffect } from "react";
import ThemeContext from "../../../context/ThemeContext";

import InfoCard from "../../../components/InfoCard";
import MainCard from "../../../components/MainCard";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const WeatherData = ({ data }) => {
  const themeHook = useState("dark");
  const [darkTheme, setDarkTheme] = useState(true);
  var fecha = new Date().toLocaleDateString();
  var iconName = "";
  var weather = data.weather[0].description;

  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = data.main.temp.toFixed(1);
  switch (data.weather[0].description) {
    case "nubes":
      weather = "Nublado";
      iconName = "cloud";
      break;
    case "muy nuboso":
      weather = "Mayormente nublado";
      iconName = "cloud";
      break;
    case "tormenta con lluvia ligera":
      iconName = "cloud-lightning";
      break;
    case "cielo claro":
      weather = "Despejado";
      iconName = "sun";
      break;
    case "lluvia ligera":
      iconName = "cloud-rain";
      break;
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? "#232634" : "#F2F2F2",
      alignItems: "center",
    },
    refreshButton: {
      position: "absolute",
      alignSelf: "flex-start",
      margin: 30,
    },
    themeButtonCircle: {
      alignSelf: darkTheme ? "flex-end" : "flex-start",
      margin: 5,
      width: 20,
      height: 20,
      borderRadius: 50,
      backgroundColor: darkTheme ? "#232634" : "#F2F2F2",
    },
    temperatureView: {
      alignItems: "center",
      flexDirection: "row",
      marginTop: 10,
    },
    temperatureText: {
      color: darkTheme ? "#e0e0e0" : "black",
      fontSize: 50,
    },
    cardsView: {
      color: darkTheme ? "black" : "white",
      margin: 10,
      alignItems: "center",
      flexDirection: "row",
    },
    localizationText: {
      fontSize: 20,
      color: darkTheme ? "#e0e0e0" : "black",
    },
    fechaText: {
      color: darkTheme ? "#e0e0e0" : "black",
    },
    info: {
      alignItems: "center",
      borderRadius: 20,
      width: 350,
      height: 230,
      backgroundColor: darkTheme ? "#393e54" : "#8F8F8F",
    },
    infoText: {
      color: darkTheme ? "#e0e0e0" : "white",
      margin: 15,
      fontSize: 20,
      fontWeight: "bold",
    },
    addtionalInfo: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    themeButton: {
      margin: 10,
      marginLeft: 300,
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    themeButtonSquare: {
      backgroundColor: darkTheme ? "#F2F2F2" : "#8F8F8F",
      justifyContent: "center",
      borderRadius: 20,
      marginRight: 20,
      width: 50,
      height: 25,
    },
  });

  return (
    <ThemeContext.Provider value={themeHook}>
      <ScrollView>
        <View style={styles.container}>
          <Feather
            style={{ marginTop: 50 }}
            name={iconName} // sun, cloud, cloud-rain, cloud-snow, cloud-drizzle, cloud-lightning, wind
            size={40}
            color="orange"
          />
          <View style={styles.temperatureView}>
            <Text style={styles.temperatureText}>{celsius}</Text>
            <Text style={[styles.temperatureText, { fontSize: 14 }]}>°C</Text>
          </View>
          <Text style={styles.localizationText}>
            {data.sys.country + ", " + " " + data.name}
          </Text>
          <Text style={styles.fechaText}>{fecha}</Text>
          <Text style={styles.infoText}>{weather}</Text>
          <View style={styles.info}>
            <Text style={styles.infoText}>Información Adicional:</Text>
            <View style={styles.addtionalInfo}>
              <InfoCard
                title={"Viento"}
                variable={data.wind.speed + " m/s"}
              ></InfoCard>
              <InfoCard
                title={"Humedad"}
                variable={data.main.humidity + "%"}
              ></InfoCard>
              <InfoCard
                title={"Temp. Min"}
                variable={data.main.temp_min.toFixed(1) + " °C"}
              ></InfoCard>
              <InfoCard
                title={"Temp. Max"}
                variable={data.main.temp_max.toFixed(1) + " °C"}
              ></InfoCard>
            </View>
          </View>
          <View style={styles.themeButton}>
            <View style={styles.themeButtonSquare}>
              <TouchableOpacity
                style={styles.themeButtonCircle}
                onPress={() =>
                  darkTheme ? setDarkTheme(false) : setDarkTheme(true)
                }
              ></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemeContext.Provider>
  );
};

export default WeatherData;
