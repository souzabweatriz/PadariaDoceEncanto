import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Inicial({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Bem-Vindo a Padaria Doce Encanto</Text>
        </View>
    );
}