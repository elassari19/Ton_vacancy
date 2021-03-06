import Image from 'next/image';
import React, { FC, memo } from 'react';

interface Props {
  className?: string;
  id?: string;
  top?: number;
  left?: number;
  rotate?: number;
  size?: number;
  icon: string;
}

const index: FC<Props> = ({ className, id, rotate, top, left, size, icon}) => {
  return <div id={id} style={{position: 'absolute', top, left, transform: `rotate(${rotate}deg)`}}>
    <Image src={icon||''} width={size} height={size} alt='Image' />
  </div>;
};

export default memo(index);