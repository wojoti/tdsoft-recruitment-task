/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListStack} from '../CharacterList';
import {FavoriteCharactersStack} from '../FavoriteCharacters';
import Logo from '../../components/Logo/Logo';
import CustomTabBar from '../../components/CustomTabBar/CustomTabBar';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: () => <Logo width={105} height={32} />,
        headerStyle: {
          backgroundColor: '#162C1B',
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Characters"
        component={CharacterListStack}
        options={{tabBarLabel: 'All characters'}}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteCharactersStack}
        options={{tabBarLabel: 'Liked characters'}}
      />
    </Tab.Navigator>
  );
};
