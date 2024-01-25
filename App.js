import { NavigationContainer} from '@react-navigation/native';
import AddWorkout from './components/screens/AddWorkout';
import WorkoutList from './components/screens/WorkoutList';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="AddWorkout">
        <Drawer.Screen name="AddWorkout" component={AddWorkout} options={{ title: 'Add Workout' }} />
        <Drawer.Screen name="WorkoutList" component={WorkoutList} options={{ title: 'Workout List' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

