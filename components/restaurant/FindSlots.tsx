import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Button from '../button';
import { wp } from '@/utils/responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

interface FindSlotsProps {
    date: Date,
    selectedNumber: number,
    slots: string[],
    restaurant: string,
    selectedSlot: string | null,
    setSelectedSlot: (selectedSlot: string |null) => void;
}

const FindSlots = ({ date, selectedNumber, slots,restaurant , selectedSlot, setSelectedSlot }: FindSlotsProps) => {

    const [slotsVisible, setSlotsVisible] = useState(false);
    const db = getFirestore();
    const handlePress = () => {
        setSlotsVisible(!slotsVisible);
    }
    const handleSelectedSlot = (slot: string) => {
        let prevSlot = selectedSlot;
        if (prevSlot == slot) {
            setSelectedSlot(null);
        }
        else {
            setSelectedSlot(slot);
        }
    };

    const handleBooking = async ()=> {
        const userEmail = await AsyncStorage.getItem("userEmail");
        console.log("Booking data", {
            email: userEmail,
            restaurant: restaurant,
            date: date.toString(),
            guests: selectedNumber,
            slot: selectedSlot
        });
        
        if (userEmail) {
            try {
                await addDoc(collection(db, 'bookings'), {
                    email: userEmail,
                    restaurant: restaurant,
                    date : date.toString(),
                    guests: selectedNumber,
                    slot: selectedSlot
                });
                alert("Booking successfully");
            }
            catch (error) {

            }
        }
    }
    return (
        <View>
            <View
                style={{
                    margin: 20,
                    flexDirection: selectedSlot != null ? 'row' : 'column',
                    justifyContent: selectedSlot != null ? 'space-between' : 'center'
                }}
            >
                <TouchableOpacity onPress={handlePress}
                    style={{
                        backgroundColor: '#f49b33',
                        width: selectedSlot != null ? wp(43) : wp(90),
                        height: 60,
                        borderRadius: 10,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        Find Slots
                    </Text>
                </TouchableOpacity>
                {selectedSlot != null && (
                    <TouchableOpacity onPress={handleBooking}
                        style={{
                            backgroundColor: '#f49b33',
                            width: wp(43),
                            height: 60,
                            borderRadius: 10,
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: 'white'
                            }}
                        >
                            Book Slot
                        </Text>
                    </TouchableOpacity>
                )}
                
            </View>
            {
                    slotsVisible && (
                        <View
                            style={{
                                backgroundColor: 'grey',
                                width: wp(90),
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginTop: 10,
                                borderRadius: 10
                            }}
                        >
                            {
                                slots.map((slot, index) => (
                                    <TouchableOpacity
                                        onPress={() => handleSelectedSlot(slot)}
                                        key={index}
                                        style={{
                                            backgroundColor: '#f49b33',
                                            width: wp(25),
                                            margin: 5,
                                            padding: 10,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 10,
                                            opacity: selectedSlot && selectedSlot !== slot ? 0.5 : 1
                                        }}
                                        disabled = {selectedSlot == slot || selectedSlot == null ? false: true}
                                    >
                                        <Text style={{ color: 'white' }}>
                                            {slot}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    )
                }

        </View>

    )
}

export default FindSlots;