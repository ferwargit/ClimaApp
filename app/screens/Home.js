import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import sol_nube from "../../assets/img/sol_nube.png";

export default function Home() {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Image
                source={sol_nube}
                style={styles.image}
            />
            <Text style={styles.textTitle}>Clima-App{'\n'}</Text>
            <Text style={styles.text}>Aplicación de clima desarrollada en React Native.{'\n'}</Text>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => navigation.navigate('quienes somos')}
            >
                <Text style={styles.btn_text}>¿Quiénes somos?</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTitle: {
        fontSize: 50,
        fontWeight: 'normal',
        textAlign: 'center',
        fontFamily: 'notoserif',
    },
    text: {
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'center',
        fontFamily: 'notoserif'
    },
    btn: {
        elevation: 10,
        backgroundColor: '#00aaff',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 90,
        padding: 10,
    },
    btn_text: {
        color: 'white'
    },
    image: {
        width: 124,
        height: 90
    }
})