import React from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { Image } from "react-native"; 
import doce from "../assets/images/doce.png";

export default function Inicial({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-Vindo a Padaria Doce Encanto</Text>
            <Image style={styles.image} source={doce} />
            <Text style={styles.title}>Delícia de Leite com Nutella® e Morango</Text>
            <Text style={styles.text}>Bolo de massa de chocolate, mousse de leite Ninho® e creme de Nutella® com morangos, cobertura de mousse de chocolate polvilhado com leite Ninho® em pó, Nutella® e morango.</Text>
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
    image: {
        width: '80%',
        height: 200,
        marginBottom: 20,
        borderRadius: 20,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#800020',
        textAlign: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#654321',
        lineHeight: 24,
        textAlign: 'justify',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
});