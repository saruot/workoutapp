import { NavigationContainer} from '@react-navigation/native';
import AddWorkout from './components/screens/AddWorkout';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkoutListScreen from './components/screens/WorkoutListScreen';
import { WorkoutProvider } from './components/functions/WorkoutContext';
const Drawer = createDrawerNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <WorkoutProvider>
      <Drawer.Navigator initialRouteName="AddWorkout">
        <Drawer.Screen name="AddWorkout" component={AddWorkout} options={{ title: 'Add Workout' }} />
        <Drawer.Screen name="WorkoutList" component={WorkoutListScreen} options={{ title: 'Workout List' }} />
      </Drawer.Navigator>
      </WorkoutProvider>
    </NavigationContainer>
  );
}

