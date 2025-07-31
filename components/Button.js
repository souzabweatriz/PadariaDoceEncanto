import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

export default function Button() {
    const [isPressed, setIsPressed] = useState(false);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (isPressed) {
            const timer = setTimeout(() => setIsPressed(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isPressed]);


    return (
        <TouchableOpacity style={[styles.followButton, selected && styles.selected]} onPress={() => setSelected(!selected)}>
            <Text style={[styles.followBT, selected && styles.bTSelected]}>{selected ? 'Following' : 'Follow'}</Text>
            {selected ? <AntDesign name="checkcircle" size={14} color="white" /> : <AntDesign name="plus" size={14} color="rgb(128, 0, 32)" />}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    followButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(128, 0, 32, 0.6)',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    selected: {
        backgroundColor: 'rgb(245, 228, 220)',
    },
    followBT: {
        color: 'white',
        fontSize: 14,
        marginRight: 8,
    },
    bTSelected: {
        color: '#fff',
    }
})