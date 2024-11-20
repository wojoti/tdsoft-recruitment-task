import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigationStack} from '../TabNavigation';
import {MainStackParamList, MainStackRoutes} from './Main.routes';
import {CharacterDetailsStack} from '../CharacterDetails';

const Tab = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, animation: 'ios_from_right'}}>
      <Tab.Screen
        name={MainStackRoutes.TabNavigationStack}
        component={TabNavigationStack}
      />
      <Tab.Screen
        name={MainStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
      />
    </Tab.Navigator>
  );
};
