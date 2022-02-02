import React, { CSSProperties, FC, ReactNode } from 'react';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
  bg?: string;
  radius?: number;
  style?: CSSProperties;
}

const index: FC<Props> = ({children, className, id, style, radius, bg}) => {
  return <div className={styles.container + ` ${className}`} id={id} style={{ ...style, backgroundColor: bg, borderRadius: radius}}>
    TIPS
  </div>;
};

export default index;