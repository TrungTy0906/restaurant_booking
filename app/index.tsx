import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { wp, hp } from '../utils/responsive';
import Button from "../components/button";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function Index() {
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
          <View style={[{ marginBottom: 20 }]}>
            <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
              <Button textcontroller='Sign up' style={styles.text} backgroundColor="#D3D3D3" />
            </TouchableOpacity>
          </View>

          <View style={styles.flexbox} >
            <Text style={{ color: 'white', fontSize: 16 }}  >Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={[styles.buttoncolor, { color: 'black', fontSize: 16, fontWeight: 'bold' }]}> Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.imageWrapper} >
            <Image source={image.logo1} style={[{ width: wp(85), height: hp(31) }, styles.logo1]} resizeMode='contain' />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2) }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
              <Text style={{ width: 50, textAlign: 'center', color: 'white' }}>Or</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>

          <View style = {{flexDirection: 'row', marginTop: hp(2)}}>
            <Text style = {{color: 'white', fontSize: 16}}>
              Be a {' '}
            </Text>
            <Text style = {{color: 'black', fontSize: 16, fontWeight:'bold'}} onPress={() => router.push('/(tabs)/home')}>Guess User</Text>
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
    marginBottom: hp(10),
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
