import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  CharacterListStackParamList,
  CharacterListStackRoutes,
} from './CharacterList.routes';
import {CharacterListScreen} from './screens';
import {CharacterDetailsStack} from '../CharacterDetails';

const Stack = createNativeStackNavigator<CharacterListStackParamList>();

export const CharacterListStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={CharacterListStackRoutes.CharacterListScreen}
        component={CharacterListScreen} //bugfix: change from children to component: async data now rerenders Screen component correctly
      />
      <Stack.Screen
        name={CharacterListStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
      />
    </Stack.Navigator>
  );
};
