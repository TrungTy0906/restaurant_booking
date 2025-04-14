import { View, Text, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { wp } from '@/utils/responsive';

interface DatePickerProps {
  date: Date;
  setDate : (date: Date) => void;
}

const DatePicker = ({date, setDate} : DatePickerProps) => {
  const [show, setShow] = useState(false);

  const handlePress = () => {
    setShow(true);
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View style={{
          width: wp(30),
       }}>
      <TouchableOpacity 
      
      onPress={handlePress}
      
      style = {
        {
          backgroundColor: '#474747',
       borderRadius: 10,
       alignItems:'center',
       padding: 10,
        }
      }
      >
        <Text 
        style = {{color: '#f49b33', fontSize: 14}}
        >{date.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
          maximumDate={new Date(new Date().setDate(new Date().getDate() + 7))}
        />
      )}
    </View>
  );
};

export default DatePicker;
