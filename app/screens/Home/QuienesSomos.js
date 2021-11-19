import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';


export default function QuienesSomos() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
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
                <Text style={styles.textTitle}>Acerca de la aplicación</Text>
                <Text style={styles.instructions}>
                Proyecto grupal de una aplicación móvil desarrollada en React Native.
                Diseñada para la busqueda del clima en ciudades de todo el mundo.
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        margin: 10
    },
    instructions: {
        paddingTop: 5,
        paddingBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'left',
        fontFamily: 'notoserif'
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'normal',
        textAlign: 'left',
        fontFamily: 'notoserif',
    },
    item: {
        padding: 10,
        fontSize: 18,
    },

});