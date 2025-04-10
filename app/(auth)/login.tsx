    import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
    import React from 'react'
    import { LinearGradient } from 'expo-linear-gradient';
    import Button from '../components/button';
    import { router } from 'expo-router';
    import { hp, wp } from '@/utils/responsive';

    const Login = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#FF939B", "#EF2A39"]}
            style={styles.container}
            >
            <Text style={styles.appar}>FoodGo</Text>
            <View style = {[{marginBottom: 20}]}> 
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                <Button textcontroller='Login' style={styles.text} backgroundColor="#D3D3D3" />
            </TouchableOpacity>
            </View>


        <View style={styles.imageWrapper} >
            <Image source={image.logo1} style={[{ width: wp(85), height: hp(31) }, styles.logo1]} resizeMode='contain' />
        </View>
        </LinearGradient>
        </View >
        </SafeAreaView >
    );
    }

    const styles = StyleSheet.create({
    appar: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: hp(20),
        marginBottom: hp(20),
    },

    flexbox: {
        flexDirection: 'row',
    },

    text: {
        fontSize: 24,
        color: 'black',
    },

    container: {
        height: '100%',
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    logo1: {
        position: 'absolute',
        bottom: 0,
        left: -wp(6),
    },
    imageWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    buttoncolor: {
        color: '#ccc',
    }
    });


    const image = {
    logo1: require('@/assets/images/image 1.png'),
    }

    export default Login;
