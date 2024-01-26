import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/WorkoutListStyles';
import { useWorkoutContext } from './path-to-WorkoutContext';

const WorkoutList = () => {
  const { workouts, setWorkouts } = useWorkoutContext(); // Destructure setWorkouts from the context

  const loadWorkouts = async () => {
    try {
      const storedWorkouts = await AsyncStorage.getItem('workouts');
      if (storedWorkouts) {
        setWorkouts(JSON.parse(storedWorkouts));
      }
    } catch (error) {
      console.error('Error loading workouts from AsyncStorage:', error);
    }
  };

  const removeWorkout = async (selectedWorkout) => {
    const updatedWorkouts = workouts.filter((workout) => workout !== selectedWorkout);
    setWorkouts(updatedWorkouts);
    await saveWorkouts(updatedWorkouts);
  };

  const saveWorkouts = async (updatedWorkouts) => {
    try {
      await AsyncStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
    } catch (error) {
      console.error('Error saving workouts to AsyncStorage:', error);
    }
  };

  useEffect(() => {
    // Subscribe to changes in AsyncStorage and update the component
    const subscription = AsyncStorage.addListener('workouts', () => {
      loadWorkouts();
    });

    // Cleanup the subscription when the component is unmounted
    return () => subscription.remove();
  }, [workouts]); // Include workouts in the dependency array to listen for changes

  return (
    <ScrollView>
      {workouts.map((workout, index) => (
        <View key={index} style={styles.workoutItem}>
          <View style={styles.workoutDetails}>
            <Text style={[styles.workoutText, { fontWeight: 'bold' }]}>{`Sport: ${workout.sportType}`}</Text>
            <Text style={styles.workoutText}>{`Distance: ${workout.distance.toFixed(2)} km`}</Text>
            <Text style={styles.workoutText}>{`Duration: ${workout.duration.toFixed(2)} minutes`}</Text>
            <Text style={styles.workoutText}>{`Date: ${formatDate(workout.date)}`}</Text>
          </View>
          <Pressable onPress={() => removeWorkout(workout)}>
            <Text style={styles.removeButton}>Remove</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
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

export default WorkoutList;
