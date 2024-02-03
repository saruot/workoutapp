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
  const [workouts, setWorkouts] = useState([{
    sportType: 'running',
    distance: 5, // in kilometers
    duration: 30, // in minutes
    date: new Date(),
  },
  {
    sportType: 'swimming',
    distance: 1.5, // in kilometers
    duration: 45, // in minutes
    date: new Date(),
  },]);

  const [unit, setUnit] = useState('kilometers');

  const addWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
  };
  
  const removeWorkout = (selectedWorkout) => {
    const updatedWorkouts = workouts.filter((workout) => workout !== selectedWorkout);
    setWorkouts(updatedWorkouts);
  };
  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, removeWorkout, unit, setUnit }}>
      {children}
    </WorkoutContext.Provider>
  );
};
