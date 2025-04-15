import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface InputFieldProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    height?: number;
    secureTextEntry?: boolean;
    showToggle?: boolean;
    onToggle?: () => void;
}

const InputField = ({
    placeholder,
    onChangeText,
    value,
    height = 40,
    secureTextEntry = false,
    showToggle = false,
    onToggle,
}: InputFieldProps) => {
    return (
        <View style={[styles.container, { height }]}>
            <TextInput
                style={[styles.input, showToggle && { paddingRight: 40 }]} // chừa chỗ cho icon
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                keyboardType="default"
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#999"
            />
            {showToggle && (
                <TouchableOpacity style={styles.icon} onPress={onToggle}>
                    <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={20} color="gray" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginVertical: 10,
        position: 'relative',
    },
    input: {
        marginLeft: 12,
        paddingVertical: 10,
        paddingRight: 12,
        color: '#000',
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: '50%',
        transform: [{ translateY: -10 }],
    },
});
