import { View, Text } from 'react-native';
import React from 'react';
import TopBar from '../../components/navigations/TopBar';
import Search from './Search';
import List from './List';
import { LocateFixedIcon } from 'lucide-react-native';

const data = [
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
  {
    name: 'Burger',
    image: 'https://foodish-api.com/images/burger/burger80.jpg',
  },
  {
    name: 'Pizza King',
    image: 'https://foodish-api.com/images/pizza/pizza80.jpg',
  },
];

export default function Home() {
  return (
    <View>
      <TopBar />
      <View style={{ padding: 12 }}>
        <Search />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 4,
            marginLeft: 6,
          }}>
          <LocateFixedIcon size={14} />
          <Text
            style={{
              fontSize: 10,
              marginLeft: 5,
            }}>
            : cimanggung, rt wakwae, kab. jongol
          </Text>
        </View>
        <List data={data} />
      </View>
    </View>
  );
}
