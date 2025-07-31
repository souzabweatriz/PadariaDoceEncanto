import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Inicial({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Bem-Vindo a Padaria Doce Encanto</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate("BottomTabNavigator")}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#007BFF",
    },
    buttonText: {
        color: "#fff",
    },
});