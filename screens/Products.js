import React from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { Image } from "react-native";
import second from "../assets/images/second.png"; 

export default function Inicial({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Bem-Vindo a Padaria Doce Encanto</Text>
            <Image style={styles.image} source={second} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(255, 245, 223)",
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
});