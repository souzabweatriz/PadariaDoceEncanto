import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/Logo.png"; 
import { Image } from "react-native";

export default function Button() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("BottomTabNavigator")}
            style={styles.button}>
            <Text style={styles.text}>Clique aqui para explorar</Text>

        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(128, 0, 32, 0.6)',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 15,
    },
    text: {
        color: '#fff',
    },
});