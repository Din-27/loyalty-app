/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
// import AppNavigator from './src/components/navigations/AppNavigator';
import BottomBar from './src/components/navigations/BottomBar';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <PaperProvider>
        <BottomBar />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
