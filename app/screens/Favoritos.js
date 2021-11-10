import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home() {
    return (
        <View style={styles.text}>
            <Text>Favoritos...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgb(71, 149, 212)',
    }
});
