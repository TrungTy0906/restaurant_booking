import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { getAuth, signOut } from "firebase/auth";
import { hp } from "@/utils/responsive";

const profile = () => {
  const router = useRouter();
  const auth = getAuth();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  useEffect(() => {
    const fetchUserEmail = async () => {
      const email = await AsyncStorage.getItem("userEmail");
      setUserEmail(email);
    };

    fetchUserEmail();
  }, []);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("userEmail");
      setUserEmail(null);

      Alert.alert("Logged out", "You have been logged out successfully.");
      router.push("/login");
    } catch (error) {
      Alert.alert("Logged Error", "Error while logging out");
    }
  };
  const handleSignup = () => {
    router.push("/signup");
  };
  return (
    <View 
      style = {
      {
        height: hp(100),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        opacity: 0.7
      }
      }
    >
      <Text 
        style = {{
          color: '#f49b33',
          fontSize: 24,
          fontWeight: 'bold'
        }}
      >
        User Profile
      </Text>
      {userEmail ? (
        <>
          <Text style = {{color: 'white', marginBottom: 20}} >Email: {userEmail} {" "}</Text>
          <TouchableOpacity
            onPress={handleLogout}
           style = {{
            backgroundColor: '#f49b33',
            width: 120,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center'
           }}
          >
            <Text style = {{fontSize: 14, fontWeight: 'bold'}}>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={handleSignup}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

export default profile