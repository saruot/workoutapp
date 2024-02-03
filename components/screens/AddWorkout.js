import React, { useState } from 'react';
import { View, Text, Alert, Pressable, TextInput, Modal, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import WorkoutList from '../functions/WorkoutList'; 
import styles from '../../styles/AddWorkoutStyles';
import { useWorkoutContext } from '../functions/WorkoutContext';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import SettingsScreen from './Settings';


const AddWorkout = ({navigation}) => {
  const { addWorkout, unit, setUnit } = useWorkoutContext();
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);


  const convertedDistance = unit === 'miles' ? distance / 0.621371 : distance;

  const openSettingsModal = () => {
    setShowSettingsModal(true);
  };

  const closeSettingsModal = () => {
    setShowSettingsModal(false);
  };

  // Used for rendering the modal when settings opened on AddWorkout screen.
  const renderSettingsModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showSettingsModal}
      onRequestClose={closeSettingsModal}
    >
      <SettingsScreen closeModal={closeSettingsModal} showCloseButton={true} />
    </Modal>
  );

  const saveWorkout = () => {
    if (isNaN(parseFloat(distance)) || isNaN(parseFloat(duration)) || distance < 0 || duration < 0) {
      Alert.alert('Error', 'Distance and duration must be numeric values and non-negative');
      return;
    }
    if (!sportType) {
      Alert.alert('Error', 'Please select a workout type');
      return;
    }

    const newWorkout = {
      sportType,
      distance: parseFloat(convertedDistance),
      duration: parseFloat(duration),
      date,
    };

    addWorkout(newWorkout);

    setSportType('');
    setDistance('');
    setDuration('');
    setDate(new Date());

    Alert.alert('Success', 'Workout added successfully!');
  };

  const formatDate = (selectedDate) => {
    if (!(selectedDate instanceof Date)) {
      selectedDate = new Date(selectedDate);
    }
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1; // Months are 0-based
    const year = selectedDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <View>
    <View style={styles.container}>
      <View style={styles.sportTypeContainer}>
            <Text style={styles.label}>Sport Type:</Text>
      <TouchableOpacity onPress={openSettingsModal} style={styles.settingsIcon}>
        <MaterialIcons name="settings" size={24} color="black" />
      </TouchableOpacity>
      {renderSettingsModal()}
      </View>

      <View style={styles.sportTypeButtonsContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.sportTypeButton,
            { backgroundColor: sportType === 'skiing' ? 'lightblue' : pressed ? '888' : '#eee' },
          ]}
          onPress={() => setSportType('skiing')}
        >
          <Text style={styles.buttonText}>Skiing</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.sportTypeButton,
            { backgroundColor: sportType === 'running' ? 'lightblue' : pressed ? '888' : '#eee' },
          ]}
          onPress={() => setSportType('running')}
        >
          <Text style={styles.buttonText}>Running</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.sportTypeButton,
            { backgroundColor: sportType === 'swimming' ? 'lightblue' : pressed ? '888' : '#eee' },
          ]}
          onPress={() => setSportType('swimming')}
        >
          <Text style={styles.buttonText}>Swimming</Text>
        </Pressable>
      </View>

      <Text style={styles.label}>Distance (in {unit}):</Text>
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

<TouchableOpacity
        style={styles.datePickerContainer}
        onPress={() => setShowDatePicker(true)}
      >
        <Ionicons name="calendar" size={24} color="black" />
      </TouchableOpacity>
      <Text>Selected Date: {date ? formatDate(date) : 'Pick a Date'}</Text>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setDate(selectedDate);
            }
          }}
        />
      )}

      <Pressable style={styles.addButton} onPress={saveWorkout}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </Pressable>
      </View>
      <Text style={styles.labelCentered}>Recent workouts</Text>
      <WorkoutList navigation={navigation} renderFirstFive={true} showViewAllButton={true} />
    </View>
  );
};

export default AddWorkout;
