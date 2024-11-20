import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import CustomTabItem from '../CustomTabItem/CustomTabItem';
import {styles} from './CustomTabBar.styled';

const CustomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.wrapper}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel?.toString() || options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <CustomTabItem
            name={route.name}
            key={route.key}
            label={label}
            isFocused={isFocused}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

export default CustomTabBar;
