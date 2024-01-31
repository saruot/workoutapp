import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sportTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items with space between them
    marginBottom: 20,
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
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 10,
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
    backgroundColor: 'lightblue',
  }, 
  selectedSportTypeButton: {
    backgroundColor: 'lightblue', // Background color for selected button
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
    flex: 1, 
    marginRight: 10, 
  },
  workoutText: {
    fontSize: 16, 
  },
  removeButton: {
    color: 'red',
    fontSize: 16, 
  }, 
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginRight: 8,
  },
  settingsIcon: {
    padding: 8,
    alignSelf: 'flex-end'
  },
});

export default styles;
