import { View, Text, ScrollView, FlatList, Image, Linking } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/config/firebaseConfig'
import { wp } from '@/utils/responsive'
import Ionicons from '@expo/vector-icons/Ionicons'
import DatePicker from '../../components/restaurant/datepicker'
// import DatePicker from '../components/restaurant/datePicker'

const Restaurant = () => {
  const { restaurant } = useLocalSearchParams();
  const flatListRef = useRef<FlatList>(null);
  interface RestaurantData {
    address?: string;
    opening?: string;
    closing?: string;
  }
  const [restaurantData, setRestaurantData] = useState<RestaurantData>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  interface CarouselItem {
    images: string[];
    // other fields if available
  }

  const [carouseData, setCarouseData] = useState<CarouselItem[]>([]);

  const handleNextImage = () => {
    const carouselLength = carouseData[0]?.images.length;
    if (currentIndex < carouselLength - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }
    if (currentIndex == carouselLength - 1) {
      const nextIndex = 0;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }
  }

  const handleBackImage = () => {
    const carouselLength = carouseData[0]?.images.length;
    if (currentIndex > 0) {
      const backIndex = currentIndex - 1;
      setCurrentIndex(backIndex);
      flatListRef.current?.scrollToIndex({ index: backIndex, animated: true });
    }
    if (currentIndex == 0) {
      const backIndex = carouselLength - 1;
      setCurrentIndex(backIndex);
      flatListRef.current?.scrollToIndex({ index: backIndex, animated: true });
    }
  }

  const [slotData, setSlotData] = useState({});

  const carouselItem = ({ item }: { item: any }) => {
    return (
      <View style={{
        width: wp(100) - 20,
        height: 220,
        borderRadius: 50,
        // justifyContent: 'center',
        // alignSelf: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <View style={{
          position: 'absolute',
          top: "50%",
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: 50,
          padding: 5,
          zIndex: 10,
          right: '6%',
          marginTop: -20,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
          <Ionicons onPress={handleNextImage} name="arrow-forward" size={24} color="white" />
        </View>
        <View style={{
          position: 'absolute',
          top: "50%",
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: 50,
          padding: 5,
          zIndex: 10,
          left: '6%',
          marginTop: -20,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
          <Ionicons onPress={handleBackImage} name="arrow-back" size={24} color="white" />
        </View>
        <View style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          bottom: 15,
        }}>
          {
            carouseData[0]?.images.map((_, index) =>
              <View
                key={index}
                style={{
                  backgroundColor: 'white',
                  height: currentIndex === index ? 10 : 6,
                  width: currentIndex === index ? 10 : 6,
                  borderRadius: 50,
                  marginHorizontal: 5,
                }}>

              </View>)
          }
        </View>
        <View>
          <Image
            source={{ uri: item }}
            style={{
              opacity: 0.6, backgroundColor: 'black', resizeMode: 'cover', width: '100%', height: '100%'
            }}
          />
        </View>
      </View>
    )
  };

  const getRestaurantData = async () => {
    try {
      const restaurantQuery = query(collection(db, "restaurants"), where("name", "==", restaurant));
      const restaurantSnapshot = await getDocs(restaurantQuery);
      if (restaurantSnapshot.empty) {
        console.log("No matching documents.");
        return;
      }

      for (const doc of restaurantSnapshot.docs) {
        const restaurantData = doc.data();
        setRestaurantData(restaurantData);

        const carouselQuery = query(collection(db, "carousel"), where("res_id", "==", doc.ref));

        const carouselSnapshot = await getDocs(carouselQuery);
        const carouselImages: any = [];

        if (carouselSnapshot.empty) {
          console.log("No matching carousel documents.");
          return;
        }

        carouselSnapshot.forEach((carouselDoc) => {
          carouselImages.push(carouselDoc.data());
        })
        setCarouseData(carouselImages)

        const slotsQuery = query(collection(db, "slots"), where("ref_id", "==", doc.ref));

        const slotsSnapshot = await getDocs(slotsQuery);
        const slots: any = [];

        if (slotsSnapshot.empty) {
          console.log("No matching slots documents.");
          return;
        }

        slotsSnapshot.forEach((slotsDoc) => {
          slots.push(slotsDoc.data());
        })
        setSlotData(slots)

      }

    } catch (e) {
      console.error("Error fetching restaurant data: ", e);
    }
  }

  const handleLocation = async () => {
    const url = "https://maps.app.goo.gl/TtSmNr394bVp9J8n8";
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URL", url);
    }
  }

  useEffect(() => {
    getRestaurantData();
  }, []);

  // console.log(carouseData)

  return (
    <SafeAreaView
      style={[
        { backgroundColor: '#2b2b2b', flex: 1, }
      ]}
    >
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <Text style={{
            color: '#f49b33',
          }}>
            {restaurant}
          </Text>
          <Text style={{ borderTopWidth: 1, borderBottomColor: '#f49b33' }}>

          </Text>
        </View>
        <View style={{
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
          <FlatList
            ref={flatListRef}
            data={carouseData[0]?.images}
            renderItem={carouselItem}
            horizontal
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            style={{ borderRadius: 25 }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 5 }}>
          <Ionicons name="location-sharp" size={24} color="#f49b33" />
          <Text style={{ color: 'white', fontSize: 14, maxWidth: '70%', marginLeft: 10 }}>
            {restaurantData?.address} |{"  "}
            <Text
              onPress={handleLocation}
              style={{ fontSize: 14, color: '#f49b33', textDecorationLine: 'underline' }}
            >
              Get Direction
            </Text>
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 20,
          marginLeft: 5
        }}>
          <Ionicons name="time" size={24} color="#f49b33" />
          <Text style={{
            color: 'white',
            fontSize: 14,
            maxWidth: '70%', marginLeft: 10
          }}>
            {restaurantData?.opening} - {restaurantData?.closing}
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          marginTop: 20,
          marginLeft: 5,
          marginRight: 10
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'

          }}>
            <Ionicons name="calendar" size={24} color="#f49b33" />
            <Text style={
              {
                color: 'white'
              }
            }>
              {" "} Select booking date
            </Text>
          </View>
          <DatePicker />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Restaurant;