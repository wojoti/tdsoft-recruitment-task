import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigationStack} from '../TabNavigation';
import {MainStackParamList, MainStackRoutes} from './Main.routes';
import {CharacterDetailsStack} from '../CharacterDetails';

const Tab = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={MainStackRoutes.TabNavigationStack}
        component={TabNavigationStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={MainStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
