import React, { useRef } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";

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
                <Text style={styles.year}>1940</Text>
                <Image style={styles.image} source={first} />
                <Text style={styles.text}>
                    Onde tudo começou -

                    Abandonado pela esposa, um pai solteiro com cinco filhos encontrou na cozinha um refúgio e um propósito. Com poucos ingredientes, mas muito amor, ele começou a fazer bolos e pães para alimentar sua família — e logo, para vizinhos e amigos. Nascia ali, em um pequeno fogão à lenha, o que viria a ser nossa confeitaria.
                </Text>
                <Text style={styles.year}>2025</Text>
                <Image style={styles.image} source={second} />
                <Text style={styles.text}>
                    💖 Hoje — Mais que doces, histórias

                    Seguimos firmes na missão que começou com um pai corajoso: transformar dificuldades em doçura e espalhar amor em forma de receita. Cada fatia, cada confeite, é parte viva dessa história.
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255, 245, 223)',
        padding: 20,
    },
    scrollView: {
        paddingBottom: 30,
    },
    title: {
        fontSize: 38,
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
        marginLeft: 20,
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
