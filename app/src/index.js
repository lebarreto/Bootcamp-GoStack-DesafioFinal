import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import '~/config/ReactotronConfig';
import { store, persistor } from '~/store';
import App from './App';

const Index = () => (
  <NavigationContainer>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
        <App />
      </PersistGate>
    </Provider>
  </NavigationContainer>
);

export default Index;
