// AddWorkout.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, DatePickerAndroid, Pressable } from 'react-native';

const AddWorkout = (navigation) => {
  const [workouts, setWorkouts] = useState([]);
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  const addWorkout = () => {
    if (isNaN(parseFloat(distance)) || isNaN(parseFloat(duration)) || distance < 0 || duration < 0) {
      Alert.alert('Error', 'Distance and duration must be numeric values and non-negative');
      return;
    }

    const newWorkout = {
      sportType,
      distance: parseFloat(distance),
      duration: parseFloat(duration),
      date,
    };

    setWorkouts([...workouts, newWorkout]);
    setSportType('');
    setDistance('');
    setDuration('');
    setDate('');
  };

  const showDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = `${year}-${month + 1}-${day}`;
        setDate(selectedDate);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  return (
    <View>
      <Text>Sport Type:</Text>
      <TextInput
        value={sportType}
        onChangeText={setSportType}
      />

      <Text>Distance (in km):</Text>
      <TextInput
        value={distance}
        onChangeText={setDistance}
        keyboardType="numeric"
      />

      <Text>Duration (in minutes):</Text>
      <TextInput
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />

      <Text>Date:</Text>
      <Pressable title="Pick a Date" onPress={showDatePicker} />
      {date && <Text>Selected Date: {date}</Text>}

      <Pressable title="Add Workout" onPress={addWorkout} />
    </View>
  );
};

export default AddWorkout;
