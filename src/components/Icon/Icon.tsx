import React from 'react';
import Characters from '../../assets/svg/characters_icon.svg';
import Favorites from '../../assets/svg/favorites_icon.svg';
import Star from '../../assets/svg/star.svg';
import StarFilled from '../../assets/svg/star_filled.svg';
import Search from '../../assets/svg/search.svg';
import Stroke from '../../assets/svg/stroke.svg';
import ArrowUp from '../../assets/svg/arrow_up.svg';
import ArrowDown from '../../assets/svg/arrow_down.svg';
import Cross from '../../assets/svg/cross.svg';

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
  search = '../../assets/svg/search.svg',
  stroke = '../../assets/svg/stroke.svg',
  arrowUp = '../../assets/svg/arrow_up.svg',
  arrowDown = '../../assets/svg/arrow_down.svg',
  cross = '../../assets/svg/cross.svg',
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
    case IconType.search:
      return <Search width={width} height={height} stroke={color} />;
    case IconType.stroke:
      return <Stroke width={width} height={height} fill={color} />;
    case IconType.arrowUp:
      return <ArrowUp width={width} height={height} fill={color} />;
    case IconType.arrowDown:
      return <ArrowDown width={width} height={height} fill={color} />;
    case IconType.cross:
      return <Cross width={width} height={height} stroke={color} />;
    default:
      return <Characters width={width} height={height} fill={color} />;
  }
};

export default Icon;
