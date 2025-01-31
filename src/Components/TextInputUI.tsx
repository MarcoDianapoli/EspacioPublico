import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputUI = ({
    value,
    onChangeText,
    secureTextEntry = false,
    inputStyle={},
    containerStyle={},
    placeholder = '',
    keyboardType = 'default',
}: any) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                style={[styles.input, inputStyle]}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5, // Margen base que puedes sobrescribir
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
    },
});
export default TextInputUI;