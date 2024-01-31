// WorkoutListStyles.js
import { Center } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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
  totalDistancesContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 8,
  },

  totalDistancesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center'
  },

  totalDistancesText: {
    fontSize: 16,
    marginBottom: 5,
  },
  sportIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  },
  sportIconBox: {
    alignItems: 'center'
  },
  viewAllButtonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  scrollViewStyle: {
    }
});

export default styles;
