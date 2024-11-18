import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import Logo from '../Logo/Logo';
import CustomTabItem from '../CustomTabItem/CustomTabItem';
import {
  conditionalHideStyles,
  conditionalInsetStyles,
  styles,
} from './CustomTabBar.styled';

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) => {
  //hiding Bottom tabs when character details are active
  const characterState = state.routes.find(el => el.name === 'Characters');
  const hideTabs = !!characterState?.state?.index;

  return (
    <View style={conditionalInsetStyles(insets.bottom).wrapper}>
      <View style={conditionalHideStyles(hideTabs).wrapper}>
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
      <View style={styles.logoWrapper}>
        <Logo />
      </View>
    </View>
  );
};

export default CustomTabBar;
