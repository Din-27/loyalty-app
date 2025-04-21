import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';

import Reward from '../../screens/Reward';
import {
  GiftIcon,
  HouseIcon,
  ScanQrCodeIcon,
  UserIcon,
} from 'lucide-react-native';
import Scan from '../../screens/Scan';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const navigations = [
  { name: 'Home', label: 'Home', component: Home, icon: HouseIcon },
  { name: 'Scan', label: 'Scan', component: Scan, icon: ScanQrCodeIcon },
  { name: 'Reward', label: 'Reward', component: Reward, icon: GiftIcon },
  { name: 'Profile', label: 'Profile', component: Profile, icon: UserIcon },
];

export default function BottomBar() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}>
      {navigations.map((item, index) => {
        if (item.name === 'Scan') {
          return (
            <Tab.Screen
              key={index}
              name={item.name}
              component={undefined as any}
              listeners={{
                tabPress: e => {
                  e.preventDefault();
                  navigation.navigate(item.name as never);
                },
              }}
              options={{
                tabBarLabel: item.label,
                tabBarIcon: () => <item.icon size={24} />,
              }}
            />
          );
        }
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            listeners={{
              tabPress: e => {
                if (item.name === 'Scan') {
                  e.preventDefault();
                  navigation.navigate(item.name as never);
                }
              },
            }}
            options={{
              tabBarLabel: item.label,
              tabBarIcon: () => <item.icon size={24} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
