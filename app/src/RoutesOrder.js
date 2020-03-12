import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import Dashboard from './pages/Dashboard';
import Details from './pages/Order/Details';
import InformProblem from './pages/Order/InformProblem';
import VisualizeProblems from './pages/Order/VisualizeProblems';
import Confirm from './pages/Order/Confirm';

const Stack = createStackNavigator();

export default function RoutesOrder() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        options={{
          title: 'Detalhes da encomenda',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
          },
        }}
        name="Details"
        component={Details}
      />
      <Stack.Screen
        options={{
          title: 'Informar problema',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
          },
        }}
        name="InformProblem"
        component={InformProblem}
      />
      <Stack.Screen
        options={{
          title: 'Visualizar problemas',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
          },
        }}
        name="VisualizeProblems"
        component={VisualizeProblems}
      />
      <Stack.Screen
        options={{
          title: 'Confirmar entrega',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
          },
        }}
        name="Confirm"
        component={Confirm}
      />
    </Stack.Navigator>
  );
}
