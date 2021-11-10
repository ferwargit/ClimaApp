import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Home() {
    return (
        <View style={styles.text}>
            <Text>Home...</Text>
            <Button
                title="Quienes Somos"
                color="#00aaff"
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#A7C7E7"
        backgroundColor: 'rgb(71, 149, 212)',
    },
    
    
});