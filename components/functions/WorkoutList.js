import React from 'react';
import { View, Text, Pressable, ScrollView, Button } from 'react-native';
import styles from '../../styles/WorkoutListStyles';
import { useWorkoutContext } from '../functions/WorkoutContext';

const WorkoutList = ({ navigation, showViewAllButton, renderFirstFive }) => {
  const { workouts, removeWorkout, unit } = useWorkoutContext();

  const navigateToWorkoutListScreen = () => {
    navigation.navigate('WorkoutList');
  };

  const renderWorkouts = () => {
    // renderFirstFive should be renamed to renderFirstTwo, but I'm too lazy to update all the instances where this is used
    const workoutsToRender = renderFirstFive ? workouts.slice(-2) : workouts;
    /* Also was supposed to be five but I couldn't get the scrolling to work on 
    the AddWorkout screen for the list so I just gave up on it and used
    the most recent two instead  */

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
    <View style={styles.scrollViewStyle}>
      <ScrollView>
        {renderWorkouts()}
      </ScrollView>
      {showViewAllButton && (
        <View style={styles.viewAllButtonContainer}>
          <Button title="View All Workouts" onPress={navigateToWorkoutListScreen} />
        </View>
      )}
    </View>
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
