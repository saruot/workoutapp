import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  datePickerButton: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  }, sportTypeButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    
  },
  sportTypeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'blue', // Default background color
  }, 
  selectedSportTypeButton: {
    backgroundColor: '#aaa', // Background color for selected button
  },
  workoutItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutDetails: {
    flex: 1, // Take remaining space
    marginRight: 10, // Add some margin between details and the remove button
  },
  workoutText: {
    fontSize: 16, // Adjust font size for better readability
  },
  removeButton: {
    color: 'red',
    fontSize: 16, // Adjust font size for better readability
  },
});

export default styles;
