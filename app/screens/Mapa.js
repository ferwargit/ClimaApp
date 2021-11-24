import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const Mapa = () => {

    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            const resultPermissions = await Permissions.askAsync(
                Permissions.LOCATION
            );
            const statusPermissions = resultPermissions.permissions.location.status;

            if (statusPermissions !== "granted") {
                toastRef.current.show(
                    "Tienes que aceptar los permisos de localizacion para ver la ubicación actual",
                    4000
                );
            } else {
                const loc = await Location.getCurrentPositionAsync({});
                setLocation({
                    latitude: loc.coords.latitude,
                    longitude: loc.coords.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                });
            }
        })();
    }, []);


    return (

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
                    
                    <Text style={styles.location}>{`Latitud: ${location.latitude}
Longitud: ${location.longitude}`}</Text>
                    
                </MapView>
            )}
            
        </View>

    );
}

const styles = StyleSheet.create({

    mapStyle: {
        width: "100%",
        height: 470,
    },
    location: {
        color: '#01579B',
        fontSize: 17,
        fontWeight: 'bold'
    }

});

export default Mapa;