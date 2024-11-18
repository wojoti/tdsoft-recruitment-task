import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon, {IconType} from '../Icon/Icon';
import {conditionalFocusedStyles, styles} from './CustomTabItem.styled';

interface ICustomTabItem {
  label: string;
  isFocused: boolean;
  onPress: () => void;
  name: string;
}

enum BottomIconType {
  Characters = 'characters',
  Favorites = 'favorites',
}

const CustomTabItem = ({label, isFocused, onPress, name}: ICustomTabItem) => {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <Icon
        icon={
          IconType[
            BottomIconType[
              name as keyof typeof BottomIconType
            ] as keyof typeof IconType
          ]
        }
        width={16}
        height={16}
        color={isFocused ? '#ffffff' : '#DAE4DC'}
      />
      <Text style={conditionalFocusedStyles(isFocused).text}>{label}</Text>

      <View style={conditionalFocusedStyles(isFocused).bottomLine} />
    </Pressable>
  );
};

export default CustomTabItem;
