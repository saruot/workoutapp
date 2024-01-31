// WorkoutListScreen.js
import React from 'react';
import WorkoutList from '../functions/WorkoutList';
import styles from '../../styles/WorkoutListStyles';
import { View, Text } from 'react-native';
import { useWorkoutContext } from '../functions/WorkoutContext';
import { FontAwesome5 } from '@expo/vector-icons';

const WorkoutListScreen = ({ navigation }) => {
  const { workouts, unit } = useWorkoutContext();

  const getTotalDistancesBySport = () => {
    const distancesBySport = {};

    workouts.forEach((workout) => {
      const { sportType, distance } = workout;
      const convertedDistance = unit === 'miles' ? distance * 0.621371 : distance;

      if (distancesBySport[sportType]) {
        distancesBySport[sportType] += convertedDistance;
      } else {
        distancesBySport[sportType] = convertedDistance;
      }
    });

    return distancesBySport;
  };

  const totalDistancesBySport = getTotalDistancesBySport();
  
  return (
    <View style={styles.container}>
      <View style={styles.totalDistancesContainer}>
        <Text style={styles.totalDistancesHeader}>Total Distances by Sport:</Text>
        <View style={styles.sportIconsContainer}>
          {Object.entries(totalDistancesBySport).map(([sportType, totalDistance]) => (
            <View key={sportType} style={styles.sportIconBox}>
              <FontAwesome5 name={getSportIconName(sportType)} size={24} color="#333" />
              <Text style={styles.totalDistancesText}>
                {`${totalDistance.toFixed(2)} ${unit === 'miles' ? 'mi' : 'KM'}`}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <WorkoutList navigation={navigation} renderFirstFive={false} showViewAllButton={false} />
    </View>
  );
};

const getSportIconName = (sportType) => {
  // Map your sport types to FontAwesome5 icons
  switch (sportType) {
    case 'skiing':
      return 'skiing';
    case 'running':
      return 'running';
    case 'swimming':
      return 'swimmer';
    // Add more cases for other sport types as needed
    default:
      return 'question'; // Default icon for unknown sport types
  }
};

export default WorkoutListScreen;
