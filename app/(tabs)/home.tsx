import { View, Text, SafeAreaView, StyleSheet, ImageBackground, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/assets/Colors'
import { hp } from '@/utils/responsive'
import { LinearTextGradient } from "react-native-text-gradient";
import restaurants from '../store/restaurants';
import { router } from 'expo-router';

const home = () => {

  type Restaurant = {
    name: string;
    seats: number;
    image: string;
    address: string;
    opening: string;
    closing: string;
  };

  const renderItem = ({ item }: { item: Restaurant }) => (
    <TouchableOpacity
  >
    <View style = {{width:220, height: 240, backgroundColor: 'white', borderRadius: 10, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
    <Image
      resizeMode="cover"
      source={{ uri: item.image }}
      style={{ width: 200, height: 120, borderRadius: 10, marginBottom: 10}}
    />
    <Text style = {{alignSelf:'flex-start', marginLeft: 10 , marginBottom: 10}}>{item.name}</Text>
    <Text style = {{alignSelf:'flex-start', marginLeft: 10 , marginBottom: 10}}>{item.address}</Text>
    <Text style = {{alignSelf:'flex-start', marginLeft: 10, marginBottom: 10}}>
      Open: {item.opening} - Close: {item.closing}
    </Text>
    </View>
  </TouchableOpacity>
);

  
  return (
    <SafeAreaView>
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
        <Text style={{ color: 'white' }}>
          Hellohoho
        </Text>
      </ImageBackground>
      {
        restaurants.length > 0 ? 
        <FlatList data = {restaurants} renderItem={renderItem} horizontal
        contentContainerStyle={{ padding: 16 }}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true} /> : <ActivityIndicator animating color = {'#fb9b33'} />
      }
      </View>
      
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SECONDARY,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    marginTop: hp(2),
    backgroundColor: 'grey',
    width: '90%',
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  }
})

const image = {
  banner: require('../../assets/images/homeBanner.png'),
}