import { FC } from 'react';

import LogoIcon from './icon_logo.svg';

interface Props {
  width?: number;
  height?: number;
}

const Logo: FC<Props> = ({ width, height }) => {
  return <LogoIcon viewBox='0 0 161 28' width={width} height={height} />;
};

export default Logo;
