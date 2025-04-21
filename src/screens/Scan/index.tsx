import { View, Text } from 'react-native';
import React from 'react';
import { ReactNativeVisionCamera } from './ReactNativeVisionCamera';
import {
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export default function Scan() {
  const device = useCameraDevice('back');
  const { hasPermission } = useCameraPermission();

  if (!hasPermission) {
    return <View>Camera Not permission !</View>;
  }
  if (device == null) {
    return <View>No camera Device, Error !</View>;
  }

  return (
    <View>
      <Text>index</Text>
      <ReactNativeVisionCamera device={device} />
    </View>
  );
}
