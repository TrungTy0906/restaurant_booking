import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {wp, hp} from '@/utils/responsive';

interface ButtonProps {
    textcontroller: string;
    style?: object; // `style` là prop tùy chọn
    backgroundColor?: string; // `backgroundColor` là prop tùy chọn
  }

const Button = ({textcontroller, style, backgroundColor}: ButtonProps) => {
  return (
    <View style= {[styles.container, {backgroundColor}]} >
      <Text style = {[style, styles.text]}>{textcontroller}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: wp(80),
        height: hp(8),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text : {
        fontSize: 26,
        color: 'black',
        fontWeight: 'bold',
    }
});

export default Button;