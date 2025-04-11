import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

interface InputFieldProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    height?: number;
}

const InputField = ({placeholder, onChangeText, value, height}: InputFieldProps) => {
    return (
        <View style = {[styles.container, {height: height}]} >
            <TextInput
            style = {styles.input}
                onChangeText={onChangeText}
                value={value}
                placeholder= {placeholder}
                keyboardType="default">
            </TextInput>
        </View>
    )
}

export default InputField;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginVertical: 10,
    },
    input: {
        marginLeft: 12,
        padding: 10,
      },
   } )
