// WorkoutListScreen.js
import React from 'react';
import WorkoutList from '../functions/WorkoutList';
import styles from '../../styles/WorkoutListStyles';
import { View } from 'react-native';
const WorkoutListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <WorkoutList navigation={navigation} renderFirstFive={false} showViewAllButton={false}/>
    </View>
  );
};

export default WorkoutListScreen;
