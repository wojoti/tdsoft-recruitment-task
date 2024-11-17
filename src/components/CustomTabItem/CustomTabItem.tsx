import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon, {IconType} from '../Icon/Icon';

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
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        gap: 4,
      }}>
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
      <Text
        style={[
          {
            color: isFocused ? '#ffffff' : '#DAE4DC',
            fontSize: 14,
            textTransform: 'uppercase',
            fontFamily: 'DMMonoRegular',
          },
        ]}>
        {label}
      </Text>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 1,
          backgroundColor: isFocused ? '#ffffff' : '#224229',
        }}
      />
    </Pressable>
  );
};

export default CustomTabItem;
