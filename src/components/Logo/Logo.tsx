import React from 'react';
import RNMLogo from '../../assets/svg/rnm_logo.svg';

interface ILogo {
  width?: number;
  height?: number;
}

const Logo = ({width, height}: ILogo) => {
  return width && height ? (
    <RNMLogo width={width} height={height} />
  ) : (
    <RNMLogo />
  );
};

export default Logo;
