import { View, Text, FlatList, Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
const history = () => {
  const [userEmail, setUserEmail] = useState<string|null>(null);

  type Booking = {
    id: string;
    date: string;
    slot: string;
    guests: number;
    restaurant: string;
    email: string;
  };
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserEmail = async () => {
      const email = await AsyncStorage.getItem("userEmail");
      setUserEmail(email);
    };

    fetchUserEmail();
  }, []);
  const fetchBookings = async () => {
    if (userEmail) {
      try {
        const bookingCollection = collection(db, "bookings");
        const bookingQuery = query(
          bookingCollection,
          where("email", "==", userEmail)
        );
        const bookingSnapshot = await getDocs(bookingQuery);

        const bookingList: Booking[] = bookingSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            date: data.date ?? "",
            slot: data.slot ?? "",
            guests: data.guests ?? 0,
            restaurant: data.restaurant ?? "",
            email: data.email ?? "",
          };
        });        
        setBookings(bookingList);
        console.log("Data is here:", bookingList, bookingSnapshot);
      } catch (error) {
        console.log(error);

        Alert.alert("Error", "Could not fetch bookings");
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchBookings();
  }, [userEmail]);

  if (loading) {
    return (
      <SafeAreaView>
        <Text>Loading....</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView 
    style = {{
      backgroundColor: 'black',
      opacity: 0.7,
      height: '100%'
    }}>
      {userEmail ? (
        <FlatList
          data={bookings}
          onRefresh={fetchBookings}
          refreshing={loading}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style = {{
              paddingTop: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#f49b33',
            }}>
              <Text style = {{color: 'white'}} >Date:{item.date}</Text>
              <Text style = {{color: 'white'}}>Slot:{item.slot}</Text>
              <Text style = {{color: 'white'}}>Guests:{item.guests}</Text>
              <Text style = {{color: 'white'}}>Restaurant:{item?.restaurant}</Text>
              <Text style = {{color: 'white'}}>Email:{item.email}</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <View>
          <Text>
            Please sign in to view your booking history
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/login")}

          >
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default history;