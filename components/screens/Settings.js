import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Ionicons, Pressable, Modal } from 'react-native';
const SettingsScreen = () => {
    const [unitSystem, setUnitSystem] = useState('kilometers'); // Default to kilometers
    const openSettingsModal = () => {
        setShowSettingsModal(true);
      };
    
      const closeSettingsModal = () => {
        setShowSettingsModal(false);
      };
  return (
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
};

export default SettingsScreen;