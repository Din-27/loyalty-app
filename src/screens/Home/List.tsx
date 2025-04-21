import { FlatList, Image, View, Text } from 'react-native';
import React from 'react';

const Item = ({ name, image }: any) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
      padding: 4,
      borderWidth: 2,
    }}>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 2 }}
        source={{ uri: image }}
      />
      <View style={{ marginLeft: 8 }}>
        <Text>{name}</Text>
      </View>
    </View>
    <Text>5 km</Text>
  </View>
);

export default function List({ data }: any) {
  return (
    <FlatList
      style={{ paddingHorizontal: 8 }}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Item {...item} />}
    />
  );
}
