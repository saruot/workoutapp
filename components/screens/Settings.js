import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useWorkoutContext } from '../functions/WorkoutContext';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../styles/SettingsStyles';

const SettingsScreen = ({ closeModal, showCloseButton }) => {
  const { unit, setUnit } = useWorkoutContext();
  const [closeButtonVisible, setCloseButtonVisible] = useState(showCloseButton)
  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
  };


  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Select Unit System</Text>

        <TouchableOpacity onPress={() => handleUnitChange('kilometers')}>
          <View style={styles.modalOption}>
            <Text style={styles.modalOptionText}>Kilometers</Text>
            {unit === 'kilometers' && <Ionicons name="radio-button-on" size={20} color="blue" />}
            {unit !== 'kilometers' && <Ionicons name="radio-button-off" size={20} color="blue" />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleUnitChange('miles')}>
          <View style={styles.modalOption}>
            <Text style={styles.modalOptionText}>Miles</Text>
            {unit === 'miles' && <Ionicons name="radio-button-on" size={20} color="blue" />}
            {unit !== 'miles' && <Ionicons name="radio-button-off" size={20} color="blue" />}
          </View>
        </TouchableOpacity>

        {closeButtonVisible && (
          <Pressable onPress={closeModal} style={styles.modalCloseButton}>
            <Text style={{ color: 'red', fontSize: 16 }}>Close</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default SettingsScreen;
