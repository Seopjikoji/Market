/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { PlatformError } from './components/Error';
import { Navigator } from './navigation/navigation';
import { Provider as PaperProvider } from 'react-native-paper';

enableScreens();

const App = () => {
  if (Platform.OS !== 'android' || Platform.Version < 29)
    return <PlatformError />;
  return (
    <PaperProvider>
      <StatusBar barStyle="default" />
      <Navigator />
    </PaperProvider>
  );
};

export default App;
