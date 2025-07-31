import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Button from "../components/Button"; 
import Local from "../assets/Local.png"; 


export default function Inicial({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.textTitle}>Bem-Vindo a Padaria Doce Encanto</Text>
            <Text style={styles.introText}>
                Seja bem-vindo à Doce Encanto, onde o aroma do pão quentinho se mistura ao sabor irresistível das melhores sobremesas. Somos uma padaria e confeitaria apaixonada por encantar cada cliente com produtos artesanais, feitos com ingredientes selecionados e aquele toque caseiro que aquece o coração.

                Aqui, cada detalhe importa — dos croissants dourados aos bolos decorados com carinho, passando pelo café fresco que acompanha suas manhãs. Um espaço aconchegante, com sabor e afeto em cada fornada.

                Venha viver essa experiência doce com a gente. ✨
                </Text>
                <Text style={styles.textProducts}>
                    Confira nossos produtos:
                    </Text>
            <Button Script={'Ver Produtos'} onPress={() => navigation.navigate('Products')}>
            </Button>
            <View style={styles.local}>
            <Text style={styles.textTitle}>Nossa Localização</Text>
            <Text style={styles.localTitle}>
            Rua das Acácias, 1287 – Bairro Jardim Aurora
            Campinas – SP, CEP 13085-300
                </Text>
            <Text style={styles.localText}>
            Localizada em uma rua tranquila e arborizada, a Doce Encanto está no coração do bairro Jardim Aurora, um cantinho acolhedor da cidade onde tradição e afeto se encontram a cada fornada.
                </Text>
                <Image style={styles.image} source={Local} />
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 245, 223)",
        justifyContent: "center",
        alignItems: "center"
    },
    textTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    introText: {
        fontSize: 18,
        textAlign: "justify",
        marginHorizontal: 15,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    textProducts: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
        textAlign: "center",
    },
    local: {
        marginTop: 10,
        padding: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    localTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        verticalmargin: 20,
    },
    localText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "justify",
        paddingHorizontal: 20,
        verticalmargin: 20,
    },
    image: {
        width: 300,
        height: 400,
        marginTop: 20,
        borderRadius: 10,

    },
});