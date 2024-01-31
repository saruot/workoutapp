import React, {useState} from 'react';
import { View, Text, Pressable, ScrollView, Button } from 'react-native';
import styles from '../../styles/WorkoutListStyles';
import { useWorkoutContext } from '../functions/WorkoutContext';

const WorkoutList = ({navigation, showViewAllButton, renderFirstFive}) => {
  const { workouts, removeWorkout, unit } = useWorkoutContext(); // Destructure setWorkouts from the context
   const navigateToWorkoutListScreen = () => {
    navigation.navigate('WorkoutList');
  };
  
  const renderWorkouts = () => {
    const workoutsToRender = renderFirstFive ? workouts.slice(0, 3) : workouts;
    

    return workoutsToRender.map((workout, index) => (
      <View key={index} style={styles.workoutItem}>
       <View style={styles.workoutDetails}>
            <Text style={[styles.workoutText, { fontWeight: 'bold' }]}>{`Sport: ${workout.sportType}`}</Text>
            <Text style={styles.workoutText}>{`Distance: ${getFormattedDistance(workout.distance, unit)} ${unit}`}</Text>
            <Text style={styles.workoutText}>{`Duration: ${workout.duration.toFixed(2)} minutes`}</Text>
            <Text style={styles.workoutText}>{`Date: ${formatDate(workout.date)}`}</Text>
          </View>
        <Pressable onPress={() => removeWorkout(workout)}>
          <Text style={styles.removeButton}>Remove</Text>
        </Pressable>
      </View>
    ));
  };

  return (
    <ScrollView>
      {renderWorkouts()}
      {showViewAllButton && (
        <Button title="View All Workouts" onPress={navigateToWorkoutListScreen} />
      )}
    </ScrollView>
  );
};



const getFormattedDistance = (distance, selectedUnit) => {
  // Convert distance based on the selected unit
  return selectedUnit === 'miles' ? (distance * 0.621371).toFixed(2) : distance.toFixed(2);
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
