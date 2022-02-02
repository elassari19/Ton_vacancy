import Image, { StaticImport } from 'next/image';
import React, { CSSProperties, FC } from 'react';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
  src: string | StaticImport;
  style?: CSSProperties;
}

const index: FC<Props> = ({src, className, id}) => {
  return <Image
    src={src}
    alt='person'
    className={
      styles.container 
      + ` ${className}`
      + ` ${className}`
      + ` ${className}`
    }
    id={id}
  />;
};

export default index;