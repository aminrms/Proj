import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ScreensHandler from './ScreensHandler';
function App(): ReactNode {
  return (
    <NavigationContainer>
      {/* Screens Handler */}
      <ScreensHandler />
    </NavigationContainer>
  );
}
export default App;
