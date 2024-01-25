import React, { useState } from 'react';
import { View, Text, Alert, Pressable, TextInput } from 'react-native';
import styles from '../../styles/AddWorkoutStyles';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

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
    setDate(new Date());
  };

  const formatDate = (selectedDate) => {
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1; // Months are 0-based
    const year = selectedDate.getFullYear();
  
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sport Type:</Text>
      <View style={styles.sportTypeButtonsContainer}>
        <Pressable
          style={({ pressed }) => [styles.sportTypeButton, { backgroundColor: pressed ? '#888' : '#eee' }]}
          onPress={() => setSportType('skiing')}
        >
          <Text style={styles.buttonText}>Skiing</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.sportTypeButton, { backgroundColor: pressed ? '#888' : '#eee' }]}
          onPress={() => setSportType('running')}
        >
          <Text style={styles.buttonText}>Running</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.sportTypeButton, { backgroundColor: pressed ? '#888' : '#eee' }]}
          onPress={() => setSportType('swimming')}
        >
          <Text style={styles.buttonText}>Swimming</Text>
        </Pressable>
      </View>

      <Text style={styles.label}>Distance (in km):</Text>
      <TextInput
        style={styles.input}
        value={distance}
        onChangeText={setDistance}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Duration (in minutes):</Text>
      <TextInput
        style={styles.input}
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />

      <View style={styles.datePickerContainer}>
  <Pressable style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
    <Text style={styles.buttonText}>Pick a Date</Text>
  </Pressable>
  <Text>Selected Date: {date ? formatDate(date) : ''}</Text>
</View>

{showDatePicker && (
  <DateTimePicker
    onChange={(event, newDate) => {
      setShowDatePicker(false);
      if (event.type === 'set' && newDate) {
        setDate(newDate instanceof Date ? newDate : new Date(newDate));
      }
    }}
    value={date}
  />
)}

      <Pressable style={styles.addButton} onPress={addWorkout}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </Pressable>
    </View>
  );
};

export default AddWorkout;
