import { Appbar, Avatar } from 'react-native-paper';
import React from 'react';

export default function TopBar() {
  return (
    <Appbar.Header style={{ height: 50 }}>
      <Appbar.Content title="Dashboard" titleStyle={{ fontSize: 15 }} />
      <Appbar.Action
        icon={() => (
          <Avatar.Image
            size={28}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDryp3aIL-Ns_sT-fGFwtYdUGx-ax2IGIOqA&s',
            }}
          />
        )}
        onPress={() => {}}
      />
    </Appbar.Header>
  );
}
