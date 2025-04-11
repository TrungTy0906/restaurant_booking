import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Keyboard,

} from 'react-native';

import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/button';
import { router } from 'expo-router';
import { hp, wp } from '@/utils/responsive';
import InputField from '../components/inputfield';
import Checkbox from 'expo-checkbox';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const [isChecked, setChecked] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={['#FF939B', '#EF2A39']}
                        style={styles.container}
                    >
                        <View style={{ flex: 1, width: '100%' }}>
                            <Text style={styles.appar}>FoodGo</Text>
                            <View style = {{marginHorizontal: 20}} >
                                <View>
                                    <View >
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                                            Email
                                        </Text>
                                        <InputField
                                            placeholder="Enter your email"
                                            onChangeText={setEmail}
                                            value={email}
                                            height={40}
                                        />
                                    </View>
                                    <View >
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                                            Password
                                        </Text>
                                        <InputField
                                            placeholder='Enter your password'
                                            onChangeText={setPassword}
                                            value={password} 
                                            height={40}
                                            />
                                    </View>

                                    <View >
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                                            Repeat Password
                                        </Text>
                                        <InputField
                                            placeholder='reapeat your password'
                                            onChangeText={setConfirmPassword}
                                            value={confirmPassword} 
                                            height={40}
                                            />
                                    </View>
                                    <View style={styles.checkboxContainer} >
                                        <Checkbox
                                            style={styles.checkbox}
                                            value={isChecked}
                                            onValueChange={setChecked}
                                            color={isChecked ? '#4630EB' : undefined}
                                        />
                                        <Text style={styles.label}>I agree with the Terms of Service and Privacy policy</Text>
                                    </View>
                                    <TouchableOpacity style={styles.center} onPress={() => router.push('/(auth)/signup')}>
                                        <Button
                                            textcontroller="Sign up"
                                            style={styles.text}
                                            backgroundColor="#D3D3D3"
                                        />
                                    </TouchableOpacity>
                                    <View
                                        style = {{flexDirection: 'row', justifyContent:'flex-end', marginTop: hp(2)}}
                                    >
                                        <Text style={{ fontSize: 14, color: 'white' }}>
                                            Already have an account?{' '}
                                        </Text>
                                        <Text
                                            style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}
                                            onPress={() => router.push('/(auth)/login')}
                                        >
                                            Login
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-start', width: '100%' }}>
                            <View style={{ marginLeft: -wp(6)}}>
                                <Image
                                    source={image.logo1}
                                    style={[{ width: wp(85), height: hp(31) }]}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    appar: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: hp(10),
        marginBottom: hp(3) + 8,
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        position: 'relative',
    },
    center: {
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        fontSize: 24,
        color: 'black',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: wp(3),
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        marginLeft: 8,
        color: 'white',
        fontSize: 14,
        flexWrap: 'wrap',
        width: '85%',
    },
    logo1: {
        position: 'absolute',
        bottom: 0,
        left: -wp(6),
    },
    navigatorpage: {
        position: 'absolute',
        bottom: hp(28),
        right: wp(15),
    }
});

const image = {
    logo1: require('@/assets/images/image 1.png'),
};

export default SignUp;
