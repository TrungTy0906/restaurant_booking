import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface GuestPickerProps {
    selectedNumber: number,
    setSelectedNumber: (selectedNumber: number) => void;
}

const GuestPicker = ({ selectedNumber, setSelectedNumber }: GuestPickerProps) => {

    const decrement = () => {
        if (selectedNumber > 1) {
            selectedNumber  = selectedNumber - 1;
            setSelectedNumber (selectedNumber);
        }
        else {
            selectedNumber = 1;
            setSelectedNumber (selectedNumber);
        }
    }
    const increment = () => {
        if (selectedNumber < 12) {
            selectedNumber += 1;
            setSelectedNumber(selectedNumber);
        }
        else {
            selectedNumber = 12;
            setSelectedNumber(selectedNumber);
        }
    }
    return (
        <View
            style={{
                flexDirection: 'row'
            }}>
            <TouchableOpacity onPress={decrement} style={{
                borderWidth: 1,
                borderColor: '#f49b33',
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                width: 30,
                alignItems: 'center',
                justifyContent:'center'

            }}>
                <Text
                    style={{
                        fontSize: 14,
                        color: 'white',
                    }}
                >-
                </Text>
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: 14,
                    color: 'white',
                    backgroundColor: 'grey',
                    width: 40,
                    textAlign: 'center',
                    textAlignVertical: 'center'
                }}
            > {selectedNumber}
            </Text>
            <TouchableOpacity 
            onPress={increment}
            style={{
                borderWidth: 1,
                borderColor: '#f49b33',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                width: 30,
                alignItems: 'center',
                justifyContent:'center'
            }}
            >
                <Text style={{
                    fontSize: 14,
                    color: 'white'

                }}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default GuestPicker;