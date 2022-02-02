import React, { FC, ReactNode } from 'react';
import { CSSProperties } from 'react';
import styles from './styles.module.scss'

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  small?: boolean;
  large?: boolean;
  medium?: boolean;
  xlarge?: boolean;
  onClick?: ()=>void;
  style?: CSSProperties;
}

const index: FC<Props> = ({children, className, id, small, large, medium, xlarge, onClick, style}) => {
  return <div 
    onClick={onClick}
    className={
      styles.container
        + ` ${className}
        ${small&&styles.small}
        ${medium&&styles.medium}
        ${large&&styles.large}
        ${xlarge&&styles.xlarge}`
      }
      id={id}
      style={style}
    >
    {children}
  </div>;
};

export default index;
