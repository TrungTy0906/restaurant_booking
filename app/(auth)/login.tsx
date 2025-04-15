import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput, Keyboard, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/button';
import { router, useRouter } from 'expo-router';
import { hp, wp } from '@/utils/responsive';
import InputField from '../../components/inputfield';
import { ActivityIndicator } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FirebaseError } from 'firebase/app';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const auth = getAuth();
    const db = getFirestore();
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Missing fields", "Please fill in all the fields.");
            return;
        }

        try {
            setLoading(true);
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;

            const userDoc = await getDoc(doc(db, 'users', user.uid));

            if (userDoc.exists()) {
                await AsyncStorage.setItem("userEmail", email);
                router.push('/home');
            }
            else {
                console.log('No such DOc');
            }
        } catch (error: unknown) {
            if (error instanceof FirebaseError && error.code === "auth/wrong-password") {
                Alert.alert("Signin Failed", "Incorrect password. Please try again.");
            } else {
                Alert.alert("Signin Error", "Something went wrong. Please try again.");
            }
        }
        finally {
            setLoading(false);
        }
    };
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
                            <View style={{ marginHorizontal: 20 }} >
                                <View>
                                    <View style={{ marginBottom: hp(3) }} >
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                                            Email
                                        </Text>
                                        <InputField
                                            placeholder="Enter your email"
                                            onChangeText={setEmail}
                                            value={email}
                                            height={62}
                                        />
                                    </View >
                                    <View style={{ marginBottom: hp(3) }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                                                Password
                                            </Text>
                                            <Text onPress={() => router.push('..')} style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                Forgot password?
                                            </Text>
                                        </View>
                                        <InputField
                                            placeholder='Enter your password'
                                            onChangeText={setPassword}
                                            value={password}
                                            height={62}
                                            secureTextEntry={!showPassword}
                                            showToggle={true}
                                            onToggle={() => setShowPassword(!showPassword)}
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.center} onPress={handleLogin} disabled={loading}>
                                        {loading ? (
                                            <ActivityIndicator size="large" color="#000000" />
                                        ) :
                                            (<Button
                                                textcontroller="Login"
                                                style={styles.text}
                                                backgroundColor="#D3D3D3"
                                            />)}
                                    </TouchableOpacity>
                                    <View
                                        style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: hp(2) }}
                                    >
                                        <Text style={{ fontSize: 14, color: 'white' }}>
                                            Don't have an account?{' '}
                                        </Text>
                                        <Text
                                            style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}
                                            onPress={() => router.push('/(auth)/signup')}
                                        >
                                            Sign up
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-start', width: '100%' }}>
                            <View style={{ marginLeft: -wp(6) }}>
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
        marginBottom: hp(8),
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
export default Login;
