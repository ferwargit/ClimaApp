import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
// import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const WeatherData = ({ data }) => {

  const celsius = (data.main.temp - 273.15).toFixed(1);

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const resultPermissions = await Permissions.askAsync(
        Permissions.LOCATION
      );
      const statusPermissions = resultPermissions.permissions.location.status;

      if (statusPermissions !== "granted") {
        toastRef.current.show(
          "Tienes que aceptar los permisos de localizacion para ver la ubicación",
          4000
        );
      } else {

        let { width, height } = Dimensions.get('window')
        const aspect_ratio = width / height
        const latitude_delta = 5 // 60 alto zoom
        const longitude_delta = latitude_delta * aspect_ratio

        // const loc = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: data.coord.lat,
          longitude: data.coord.lon,
          latitudeDelta: latitude_delta,
          longitudeDelta: longitude_delta,
        });
      }
    })();
  }, []);


  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <ScrollView style={styles.containerInner}>
        <Text style={styles.title}>{data.name} - {data.sys.country}</Text>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>{data.weather[0].description}</Text>
          <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` }} />
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Temperatura</Text>
          <View style={styles.tempContainer}>
            <Text style={styles.boxText}>{celsius}&#8451;</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Humedad</Text>
          <Text style={styles.boxText}>{data.main.humidity}%</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Presión</Text>
          <Text style={styles.boxText}>{data.main.pressure}hPa</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Viento</Text>
          <Text style={styles.boxText}>{data.wind.speed} m/s</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Coordenadas</Text>
          <Text style={styles.boxText}>Latitud: {data.coord.lat} </Text>
          <Text style={styles.boxText}>Longitud: {data.coord.lon} </Text>
        </View>

        <View>
          {location && (
            <MapView
              style={styles.mapStyle}
              initialRegion={location}
              showsUserLocation={true}
              onRegionChange={(region) => setLocation(region)}
            >
              <MapView.Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                draggable
              />
            </MapView>
          )}
        </View>
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  containerInner: {
    paddingHorizontal: 20,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    borderWidth: 2,
    borderColor: '#03A9F4',
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#4FC3F7',
    borderRadius: 15,
  },
  boxLabel: {
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,

  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 40,
    alignContent: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  mapStyle: {
    width: "100%",
    height: 315,
  },
});

export default WeatherData;
