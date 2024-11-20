/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import CustomTabBar from '../../components/CustomTabBar/CustomTabBar';
import {
  TabNavigationStackParamList,
  TabNavigationStackRoutes,
} from './TabNavigation.routes';

const Tab = createBottomTabNavigator<TabNavigationStackParamList>();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        animation: 'shift',
      }}>
      <Tab.Screen
        name={TabNavigationStackRoutes.CharacterListScreen}
        component={CharacterListScreen}
        options={{tabBarLabel: 'All characters'}}
      />
      <Tab.Screen
        name={TabNavigationStackRoutes.FavoriteCharactersScreen}
        component={FavoriteCharactersScreen}
        options={{tabBarLabel: 'Liked characters'}}
      />
    </Tab.Navigator>
  );
};
