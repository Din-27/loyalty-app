import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { AlertButton, AppStateStatus } from 'react-native';
import {
  Alert,
  AppState,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import type { Code } from 'react-native-vision-camera';
import { useCodeScanner } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import { FlashlightIcon } from 'lucide-react-native';

export const useIsForeground = (): boolean => {
  const [isForeground, setIsForeground] = useState(true);

  useEffect(() => {
    const onChange = (state: AppStateStatus): void => {
      setIsForeground(state === 'active');
    };
    const listener = AppState.addEventListener('change', onChange);
    return () => listener.remove();
  }, [setIsForeground]);

  return isForeground;
};

const showCodeAlert = (value: string, onDismissed: () => void): void => {
  const buttons: AlertButton[] = [
    {
      text: 'Close',
      style: 'cancel',
      onPress: onDismissed,
    },
  ];
  if (value.startsWith('http')) {
    buttons.push({
      text: 'Open URL',
      onPress: () => {
        Linking.openURL(value);
        onDismissed();
      },
    });
  }
  Alert.alert('Scanned Code', value, buttons);
};

export const ReactNativeVisionCamera = ({ device }: any) => {
  const [torch, setTorch] = useState(false);

  const isShowingAlert = useRef(false);
  const onCodeScanned = useCallback((codes: Code[]) => {
    const value = codes[0]?.value;
    if (value == null) {
      return;
    }
    if (isShowingAlert.current) {
      return;
    }
    showCodeAlert(value, () => {
      isShowingAlert.current = false;
    });
    isShowingAlert.current = true;
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: onCodeScanned,
  });

  return (
    <View>
      <Camera
        style={(StyleSheet.absoluteFill, { height: '100%' })}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
        torch={torch ? 'on' : 'off'}
        enableZoomGesture={true}
      />

      <View style={styles.rightButtonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setTorch(!torch)}>
          <FlashlightIcon color="white" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: 'rgba(140, 140, 140, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButtonRow: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
