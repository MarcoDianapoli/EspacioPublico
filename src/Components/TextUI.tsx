import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextUI = ({
    label,
    labelStyle = {},
    containerStyle = {},
}: any) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default TextUI;