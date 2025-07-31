import React, { useRef } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AboutUs() {
    const navigation = useNavigation();
    const scrollRef = useRef(null);
    const handleScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ y: 0, animated: true });
        }
    };
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                ref={scrollRef}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                contentContainerStyle={styles.scrollView}
            >
                <Text style={styles.title}>Sobre Nós</Text>
                <Text style={styles.text}>
                    Na nossa confeitaria, cada doce carrega mais do que sabor — carrega história, afeto e tradição.

                    Inspirados pelas receitas de família e pelo cheirinho de bolo saindo do forno, unimos técnicas artesanais com ingredientes cuidadosamente selecionados. Acreditamos que a confeitaria é uma forma de amor, passada de geração em geração, onde cada detalhe importa.

                    Aqui, tradição e inovação andam de mãos dadas para oferecer experiências que aquecem o coração e adoçam a vida. Seja em um simples pedaço de bolo ou em uma torta elaborada, você sempre encontrará o nosso toque especial: feito com alma, feito com verdade.
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
    },
    text: {
        fontSize: 16,
        color: '#654321',
        lineHeight: 24,
        textAlign: 'justify',
    },
});
