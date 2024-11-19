import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  FavoriteCharactersStackParamList,
  FavoriteCharactersStackRoutes,
} from './FavoriteCharacters.routes';
import {FavoriteCharactersScreen} from './screens';
import {CharacterDetailsStack} from '../CharacterDetails';

const Stack = createNativeStackNavigator<FavoriteCharactersStackParamList>();

export const FavoriteCharactersStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={FavoriteCharactersStackRoutes.FavoriteCharactersScreen}
        component={FavoriteCharactersScreen}
      />
      <Stack.Screen
        name={FavoriteCharactersStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
      />
    </Stack.Navigator>
  );
};
