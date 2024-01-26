// AddWorkout.js
import React, { useState } from 'react';
import { View, Text, Alert, Pressable, TextInput, Modal, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import WorkoutList from '../functions/WorkoutList'; // Make sure to import WorkoutList
import styles from '../../styles/AddWorkoutStyles';
import { useWorkoutContext } from '../functions/WorkoutContext';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';


const AddWorkout = () => {
  const { addWorkout } = useWorkoutContext();
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [unitSystem, setUnitSystem] = useState('kilometers'); 


  const openSettingsModal = () => {
    setShowSettingsModal(true);
  };

  const closeSettingsModal = () => {
    setShowSettingsModal(false);
  };
  const renderSettingsModal = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Select Unit System</Text>
        
        <TouchableOpacity onPress={() => handleUnitChange('kilometers')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ marginRight: 10 }}>Kilometers</Text>
            {unitSystem === 'kilometers' && <Ionicons name="radio-button-on" size={20} color="blue" />}
            {unitSystem !== 'kilometers' && <Ionicons name="radio-button-off" size={20} color="blue" />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleUnitChange('miles')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 10 }}>Miles</Text>
            {unitSystem === 'miles' && <Ionicons name="radio-button-on" size={20} color="blue" />}
            {unitSystem !== 'miles' && <Ionicons name="radio-button-off" size={20} color="blue" />}
          </View>
        </TouchableOpacity>

        <Pressable onPress={closeSettingsModal} style={{ marginTop: 20 }}>
          <Text style={{ color: 'blue', fontSize: 16 }}>Close</Text>
        </Pressable>
      </View>
    </View>
  );


  const saveWorkout = () => {
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

    addWorkout(newWorkout);

    setSportType('');
    setDistance('');
    setDuration('');
    setDate(new Date());

    // Show a popup
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
    <View style={styles.container}>
      <Pressable onPress={openSettingsModal} style={styles.settingsIcon}>
      <MaterialIcons name="settings" size={24} color="black" />
            </Pressable>

      {/* Settings Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSettingsModal}
        onRequestClose={closeSettingsModal}
      >
        {renderSettingsModal()}
      </Modal>

      <Text style={styles.label}>Sport Type:</Text>
      <View style={styles.sportTypeButtonsContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.sportTypeButton,
            { backgroundColor: sportType === 'skiing' ? 'blue' : pressed ? 'blue' : '#eee' },
          ]}
          onPress={() => setSportType('skiing')}
        >
          <Text style={styles.buttonText}>Skiing</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.sportTypeButton,
            { backgroundColor: sportType === 'running' ? 'blue' : pressed ? '#888' : '#eee' },
          ]}
          onPress={() => setSportType('running')}
        >
          <Text style={styles.buttonText}>Running</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.sportTypeButton,
            { backgroundColor: sportType === 'swimming' ? 'blue' : pressed ? '#888' : '#eee' },
          ]}
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
              // Ensure newDate is a valid Date object
              const selectedDate = newDate instanceof Date ? newDate : new Date(newDate);
              setDate(selectedDate);
            }
          }}
          value={date}
        />
      )}

      <Pressable style={styles.addButton} onPress={saveWorkout}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </Pressable>

      <WorkoutList/> 
    </View>
  );
};

export default AddWorkout;
