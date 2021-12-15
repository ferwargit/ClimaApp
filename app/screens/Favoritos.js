import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Favoritos = () => {
  const [ciudades, setCiudades] = useState([]);

  const obtenerStorage = async () => {
    try {
      let items = await AsyncStorage.getItem("ciudad");

      if (items !== "") {
        setCiudades(JSON.parse(items));
      }
    } catch (e) {
      return Alert.alert("Error", "Error al traer en favoritos", [
        { text: "OK" },
      ]);
    }
  };

  useEffect(() => {
    obtenerStorage();
  }, [ciudades]);

  const eliminarCiudad = async (id) => {
    const ciudadesfiltradas = ciudades.filter((ciudad) => ciudad.id !== id);
    await AsyncStorage.setItem("ciudad", JSON.stringify(ciudadesfiltradas));
    setCiudades(ciudadesfiltradas);
  };

  const obtenerclima = async (city) => {
    /*const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermap_api_key}`);
        const resData = await res.json();        
        const celsius = (resData.main.temp - 273.15).toFixed(2);        
        console.log(JSON.stringify(celsius));
        return JSON.stringify(celsius); */
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#039BE5",
      }}
    >
      {/* HEADER */}
      {/* <View style={{
                borderBottomWidth: 1,
                borderColor: '#ddd',
                alignItems: 'center',
                justifyContent: 'center',
                height: 30
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#fff'
                }}>Favoritos</Text>
            </View> */}

      {/* LISTA DE CIUDADES */}

      <FlatList
        style={{
          backgroundColor: "#B3E5FC",
        }}
        data={ciudades}
        renderItem={({ item }) => (
          <View
            style={{
              //backgroundColor: '#00B0FF',
              backgroundColor: "#81D4FA",
              marginHorizontal: 10,
              marginVertical: 5,
              borderRadius: 10,
              borderColor: '"ddd',
              borderWidth: 1,
              padding: 10,
            }}
          >
            <View
              style={{
                //backgroundColor: '#00B0FF',
                backgroundColor: "#81D4FA",
                marginHorizontal: 10,
                marginVertical: 5,
                borderRadius: 10,
                borderColor: '"ddd',
                borderWidth: 1,
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#0277BD",
                  // 7.-Añado la temperatura y el icono a la ciudad
                }}
              >
                {item.ciudad} {item.temp} &#8451;{" "}
                <Image
                  style={styles.image}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${item.icon}.png`,
                  }}
                />
              </Text>

              {/*<Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginBottom: 5,
                                marginTop:0,
                                marginLeft: 300,
                                color: '#0277BD'
                            }}>{`${obtenerclima(item.ciudad)}`}&#8451;</Text>*/}
            </View>
            <Button
              onPress={() => eliminarCiudad(item.id)}
              title="eliminar"
              color="#00aaff"
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Nada para mostrar</Text>
          </View>
        )}
        keyExtractor={(ciudad) => ciudad.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    //alignContent: 'center',
    //position: 'absolute',
    //right: 5
  },
});
