import React, { useRef } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import first from "../assets/images/first.png";

export default function AboutUs() {
    const scrollRef = useRef(null);

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                ref={scrollRef}
                scrollEventThrottle={16}
                contentContainerStyle={styles.scrollView}
            >
                <Text style={styles.title}>Sobre Nós</Text>
                <Text style={styles.text}>
                    Na nossa confeitaria, cada doce carrega mais do que sabor — carrega
                    história, afeto e tradição.
                    Inspirados pelas receitas de família e pelo cheirinho de bolo saindo
                    do forno, unimos técnicas artesanais com ingredientes cuidadosamente
                    selecionados. Acreditamos que a confeitaria é uma forma de amor,
                    passada de geração em geração, onde cada detalhe importa.
                    Aqui, tradição e inovação andam de mãos dadas para oferecer
                    experiências que aquecem o coração e adoçam a vida. Seja em um simples
                    pedaço de bolo ou em uma torta elaborada, você sempre encontrará o
                    nosso toque especial: feito com alma, feito com verdade.
                </Text>
                <Text style={styles.text}>
                    Nossos produtos são feitos com carinho e dedicação, sempre buscando a
                    melhor qualidade e sabor. Venha nos visitar e descubra o que temos a
                    oferecer!
                </Text>
                <Text style={styles.title}>Conheça nossa trajetória</Text>
                <Image style={styles.image} source={first} />
                <Text style={styles.year}>1940</Text>
                <Text style={styles.text}>
                    Desde o início, nossa missão tem sido criar doces que não apenas
                    satisfaçam o paladar, mas também tragam alegria e conforto. Cada
                    receita é uma homenagem às nossas raízes e à paixão pela confeitaria.
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(245, 228, 220)',
        padding: 20,
    },
    scrollView: {
        paddingBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#800020', 
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: '#654321', 
        lineHeight: 24,
        textAlign: 'justify',
        marginBottom: 20,
    },
    year: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgb(211, 180, 122)',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: 40,
        fontStyle: 'italic',
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'contain',
        marginBottom: 20,
        borderRadius: 40,
        alignSelf: 'center',
    },
});
