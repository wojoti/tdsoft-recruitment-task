import React from 'react';
import Characters from '../../assets/svg/characters_icon.svg';
import Favorites from '../../assets/svg/favorites_icon.svg';

interface IIcon {
  width: number;
  height: number;
  color?: string;
  icon: IconType;
}

export enum IconType {
  characters = '../../assets/svg/characters_icon.svg',
  favorites = '../../assets/svg/favorites_icon.svg',
}

const Icon = ({width, height, color = 'white', icon}: IIcon) => {
  switch (icon) {
    case IconType.characters:
      return <Characters width={width} height={height} fill={color} />;
    case IconType.favorites:
      return <Favorites width={width} height={height} fill={color} />;
    default:
      return <Characters width={width} height={height} fill={color} />;
  }
};

export default Icon;
