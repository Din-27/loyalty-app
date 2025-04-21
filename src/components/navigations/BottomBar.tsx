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

const Tab = createBottomTabNavigator();

const navigations = [
  { name: 'Home', label: 'Home', component: Home, icon: HouseIcon },
  { name: 'Scan', label: 'Scan', component: Scan, icon: ScanQrCodeIcon },
  { name: 'Reward', label: 'Reward', component: Reward, icon: GiftIcon },
  { name: 'Profile', label: 'Profile', component: Profile, icon: UserIcon },
];

export default function BottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}>
      {navigations.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
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
