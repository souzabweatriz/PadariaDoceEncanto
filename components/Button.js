import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

export default function Button() {

    return (
        <TouchableOpacity onPress={() => navigation.navigate("BottomTabNavigator")}
            style={styles.button}>
            <Text style={styles.text}>Clique aqui</Text>
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
        borderRadius: 20,
    },
})