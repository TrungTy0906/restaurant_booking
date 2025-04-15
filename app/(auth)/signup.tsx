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
    Alert,

} from 'react-native';

import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/button';
import { hp, wp } from '@/utils/responsive';
import InputField from '../../components/inputfield';
import Checkbox from 'expo-checkbox';
import { useRoute } from '@react-navigation/native';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { FirebaseError } from '@firebase/util';
import { ActivityIndicator } from 'react-native';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const router = useRouter();
    const auth = getAuth();
    const db = getFirestore();
    const handlePress = async () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert("Missing fields", "Please fill in all the fields.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Password mismatch", "Passwords do not match.");
            return;
        }

        if (!isChecked) {
            Alert.alert("Agreement required", "Please accept the terms and privacy policy.");
            return;
        }

        try {
            setLoading(true);
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;

            await setDoc(doc(db, 'users', user.uid), {
                email: email,
                createAt: new Date()
            });

            await AsyncStorage.setItem("userEmail", email);
            await AsyncStorage.setItem("isGuest", "false");

            router.push("/home");
        } catch (error: unknown) {
            if (error instanceof FirebaseError && error.code === "auth/email-already-in-use") {
                Alert.alert("Signup Failed", "This email is already in use.");
            } else {
                Alert.alert("Signup Error", "Something went wrong. Please try again.");
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
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                                            Password
                                        </Text>
                                        <InputField
                                            placeholder="Enter your password"
                                            onChangeText={setPassword}
                                            value={password}
                                            height={40}
                                            secureTextEntry={!showPassword}
                                            showToggle={true}
                                            onToggle={() => setShowPassword(!showPassword)}
                                        />
                                    </View>

                                    <View >
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                                            Repeat Password
                                        </Text>
                                        <InputField
                                            placeholder="Repeat your password"
                                            onChangeText={setConfirmPassword}
                                            value={confirmPassword}
                                            height={40}
                                            secureTextEntry={!showConfirmPassword}
                                            showToggle={true}
                                            onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
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
                                    <TouchableOpacity style={styles.center} onPress={handlePress} disabled={loading}>
                                        {loading ? (
                                            <ActivityIndicator size="large" color="#000000" />
                                        ) : (
                                            <Button
                                                textcontroller="Sign up"
                                                style={styles.text}
                                                backgroundColor="#D3D3D3"
                                            />
                                        )}
                                    </TouchableOpacity>
                                    <View
                                        style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: hp(2) }}
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
