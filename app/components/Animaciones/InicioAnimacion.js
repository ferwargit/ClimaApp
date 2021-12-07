import React, { useState, useEffect } from 'react';
import { Animated, StatusBar, StyleSheet, View } from 'react-native';
import sol_nube from "../../../assets/img/sol_nube.png";


const InicioAnimacion = ({ setAnimated }) => {

    const [show] = useState(new Animated.Value(1));

    const [posicionA] = useState(new Animated.Value(700));
    const [posicionB] = useState(new Animated.Value(700));

    const [posicionC] = useState(new Animated.Value(-400));
    const [posicionD] = useState(new Animated.Value(-400));

    const [font] = useState(new Animated.Value(1));


    useEffect(() => {

        Animated.parallel([

            Animated.timing(show, {
                toValue: 1,
                duration: 2500,
                delay: 3000,
                useNativeDriver: false,
            }),

            Animated.timing(posicionA, {
                toValue: -700,
                duration: 4000,
                useNativeDriver: false,
            }),
            Animated.timing(posicionB, {
                toValue: -700,
                duration: 4000,
                useNativeDriver: false,
            }),
            Animated.timing(posicionC, {
                toValue: 300,
                duration: 4000,
                useNativeDriver: false,
            }),
            Animated.timing(posicionD, {
                toValue: 300,
                duration: 4000,
                useNativeDriver: false,
            })

        ]).start(() => {

            Animated.timing(font, {
                toValue: 75,
                duration: 5000,
                useNativeDriver: false,
            }).start(() => setAnimated(true));
        });

    }, []);


    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="#00aaff"

                barStyle="light-content"
            />
            <View style={styles.container}>

                <Animated.Image
                    source={sol_nube}
                    style={[styles.image, { top: posicionA }]} />
                <Animated.Image
                    source={sol_nube}
                    style={[styles.image, { bottom: posicionB }]} />
                <Animated.Image
                    source={sol_nube}
                    style={[styles.image, { left: posicionC }]} />
                <Animated.Image
                    source={sol_nube}
                    style={[styles.image, { right: posicionD }]} />

                <Animated.Text style={[styles.text, { opacity: show, transform: [{ scale: font }] }]}>
                    Clima
                </Animated.Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#00aaff',
        flex: 0.40,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    image: {
        width: 225,
        height: 225,
        resizeMode: 'contain',
    },

    text: {
        fontSize: 1.05,
        color: '#00aaff',
    },
});

export default InicioAnimacion;
