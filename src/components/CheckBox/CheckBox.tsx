import {Pressable} from 'react-native';
import React from 'react';
import Icon, {IconType} from '../Icon/Icon';
import {conditionalStyles, styles} from './CheckBox.styled';

interface ICheckbox {
  value: boolean;
  onPress: () => void;
}

const CheckBox = ({value, onPress}: ICheckbox) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.wrapper, conditionalStyles(value).wrapper]}>
      {value && <Icon width={12} height={8} icon={IconType.stroke} />}
    </Pressable>
  );
};

export default CheckBox;
