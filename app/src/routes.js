import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Details from '~/pages/Order/Details';
import InformProblem from '~/pages/Order/InformProblem';
import VisualizeProblem from '~/pages/Order/VisualizeProblems';
import Confirm from '~/pages/Order/Confirm';
import Profile from '~/pages/Profile';
import RoutesOrder from './RoutesOrder';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#7D40E7',
          inactiveTintColor: '#999999',
          style: {
            backgroundColor: '#FFFFFF',
          },
          keyboardHidesTabBar: true,
        }}
      >
        <Tabs.Screen
          name="Dashboard"
          component={RoutesOrder}
          options={{
            tabBarLabel: 'Entregas',
            tabBarIcon: ({ color }) => (
              <Icon name="format-align-justify" size={20} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Meu Perfil',
            tabBarIcon: ({ color }) => (
              <Icon name="person" size={20} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </>
  );
}
