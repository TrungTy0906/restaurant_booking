import { View, Text, SafeAreaView, StyleSheet, ImageBackground, FlatList, ActivityIndicator, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/assets/Colors'
import { hp } from '@/utils/responsive'
import { LinearTextGradient } from "react-native-text-gradient";
import { router } from 'expo-router';
import uploadData from '@/config/uploadData';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const home = () => {

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const temp = async () => {
    const value = await AsyncStorage.getItem("isGuest");
    const email = await AsyncStorage.getItem("userEmail");
    console.log(value, email);
  };

  type Restaurant = {
    name: string;
    seats: number;
    image: string;
    address: string;
    opening: string;
    closing: string;
  };

  const renderItem = ({ item }: { item: Restaurant }) => (
    <TouchableOpacity onPress={() => router.push({
      pathname: '/restaurant/[restaurant]',
      params: { restaurant: item.name },
    })}
    >
      <View style={{ width: 220, height: 240, backgroundColor: 'gray', borderRadius: 10, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          resizeMode="cover"
          source={{ uri: item.image }}
          style={{ width: 200, height: 120, borderRadius: 10, marginBottom: 10 }}
        />
        <Text style={{ alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10 }}>{item.name}</Text>
        <Text style={{ alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10 }}>{item.address}</Text>
        <Text style={{ alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10 }}>
          Open: {item.opening} - Close: {item.closing}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const getRestaurants = async () => {
    const q = query(collection(db, "restaurants"));
    const res = await getDocs(q);
    const data: Restaurant[] = [];
    res.forEach((item) => {
      data.push(item.data() as Restaurant);
    });
    setRestaurants(data);
  };

  useEffect(() => {
    getRestaurants();
    temp();
  }, []);


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.appbar}>
            <Text style={{ color: 'black', fontSize: 16 }}>
              {' '}Welcome to {' '}
            </Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              FoodGo
            </Text>
          </View>
          <ImageBackground
            resizeMode='cover'
            source={image.banner}
            style={{ width: '100%', height: hp(30), justifyContent: 'center', alignItems: 'center' }}
          >
          </ImageBackground>
          <View style={{ alignItems: 'flex-start' }}>
            <Text style={{ alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10, fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              Special Discount %
            </Text>
          </View>
          {
            restaurants.length > 0 ?
              <FlatList data={restaurants} renderItem={renderItem} horizontal
                contentContainerStyle={{ padding: 16 }}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true} /> : <ActivityIndicator animating color={'#fb9b33'} />
          }

          <View style={{ alignItems: 'flex-start' }}>
            <Text style={{ alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10, fontSize: 20, fontWeight: 'bold', color: '#fb9b33' }}>
              Our Restaurants
            </Text>
          </View>
          {
            restaurants.length > 0 ?
              <FlatList data={restaurants} renderItem={renderItem} horizontal
                contentContainerStyle={{ padding: 16 }}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true} /> : <ActivityIndicator animating color={'#fb9b33'} />
          }
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SECONDARY,
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    marginTop: hp(2),
    backgroundColor: 'grey',
    width: '90%',
    height: hp(6),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  }
})

const image = {
  banner: require('../../assets/images/homeBanner.png'),
}