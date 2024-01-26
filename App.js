import { NavigationContainer} from '@react-navigation/native';
import AddWorkout from './components/screens/AddWorkout';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkoutListScreen from './components/screens/WorkoutListScreen';
import { WorkoutProvider } from './components/functions/WorkoutContext';
import SettingsScreen from './components/screens/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <WorkoutProvider>
      <Drawer.Navigator initialRouteName="AddWorkout">
        <Drawer.Screen name="AddWorkout" component={AddWorkout} options={{ title: 'Add Workout' }} />
        <Drawer.Screen name="WorkoutList" component={WorkoutListScreen} options={{ title: 'Workout List' }} />
        <Drawer.Screen name="Settings" component={SettingsStack} />
      </Drawer.Navigator>
      </WorkoutProvider>
    </NavigationContainer>
  );
}

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
