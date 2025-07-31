import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Button({ Script, onPress }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={onPress || (() => navigation.navigate("BottomTabNavigator"))}
            style={styles.button}>
            <Text style={styles.text}>{Script}</Text>

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