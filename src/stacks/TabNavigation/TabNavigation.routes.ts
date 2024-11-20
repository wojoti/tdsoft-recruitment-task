import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../Main/Main.routes';

export type TabNavigationStackParamList = {
  CharacterListScreen: undefined;
  FavoriteCharactersScreen: undefined;
};

export type TabStackNavigationProp =
  NativeStackNavigationProp<TabNavigationStackParamList>;

export type TabScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<TabNavigationStackParamList>,
  NativeStackNavigationProp<MainStackParamList>
>;

export type TabScreenProps = {
  navigation: TabScreenNavigationProp;
  route: RouteProp<
    TabNavigationStackParamList,
    keyof TabNavigationStackParamList
  >;
};

export const TabNavigationStackRoutes: {
  [route in keyof TabNavigationStackParamList]: route;
} = {
  CharacterListScreen: 'CharacterListScreen',
  FavoriteCharactersScreen: 'FavoriteCharactersScreen',
};
