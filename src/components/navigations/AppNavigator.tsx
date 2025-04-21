// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomBar from './BottomBar';
// import Scan from '../../screens/Scan';

// const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <BottomBar />
    // <Stack.Navigator screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="Main" component={BottomBar} />
    //   <Stack.Screen name="Scan" component={Scan} />
    // </Stack.Navigator>
  );
}
