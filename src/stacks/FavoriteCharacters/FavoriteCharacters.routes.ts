import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CharacterDetailsStackParamList} from '../CharacterDetails/CharacterDetails.routes';

export type FavoriteCharactersStackParamList = {
  FavoriteCharactersScreen: undefined;
  CharacterDetailsStack: NavigatorScreenParams<CharacterDetailsStackParamList>;
};

export type FavoriteCharactersStackNavigationProp =
  NativeStackNavigationProp<FavoriteCharactersStackParamList>;

export const FavoriteCharactersStackRoutes: {
  [route in keyof FavoriteCharactersStackParamList]: route;
} = {
  FavoriteCharactersScreen: 'FavoriteCharactersScreen',
  CharacterDetailsStack: 'CharacterDetailsStack',
};
