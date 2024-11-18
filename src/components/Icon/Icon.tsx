import React from 'react';
import Characters from '../../assets/svg/characters_icon.svg';
import Favorites from '../../assets/svg/favorites_icon.svg';
import Star from '../../assets/svg/star.svg';
import StarFilled from '../../assets/svg/star_filled.svg';

interface IIcon {
  width: number;
  height: number;
  color?: string;
  icon: IconType;
}

export enum IconType {
  characters = '../../assets/svg/characters_icon.svg',
  favorites = '../../assets/svg/favorites_icon.svg',
  star = '../../assets/svg/star.svg',
  starFilled = '../../assets/svg/star_filled.svg',
}

const Icon = ({width, height, color = 'white', icon}: IIcon) => {
  switch (icon) {
    case IconType.characters:
      return <Characters width={width} height={height} fill={color} />;
    case IconType.favorites:
      return <Favorites width={width} height={height} fill={color} />;
    case IconType.star:
      return <Star width={width} height={height} stroke={color} />;
    case IconType.starFilled:
      return <StarFilled width={width} height={height} fill={color} />;
    default:
      return <Characters width={width} height={height} fill={color} />;
  }
};

export default Icon;
