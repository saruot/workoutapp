// WorkoutContext.js
import React, { createContext, useContext, useState } from 'react';

const WorkoutContext = createContext();

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkoutContext must be used within a WorkoutProvider');
  }
  return context;
};

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
  };
  const removeWorkout = (selectedWorkout) => {
    const updatedWorkouts = workouts.filter((workout) => workout !== selectedWorkout);
    setWorkouts(updatedWorkouts);
  };
  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, removeWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
