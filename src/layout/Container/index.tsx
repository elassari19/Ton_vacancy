<<<<<<< HEAD
import React, { FC, memo, ReactNode } from "react";
import { CSSProperties } from "react";
import styles from "./styles.module.scss";
=======
import React, { FC, memo, ReactNode } from 'react';
import { CSSProperties } from 'react';
import styles from './styles.module.scss'
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  small?: boolean;
  large?: boolean;
  medium?: boolean;
  xlarge?: boolean;
<<<<<<< HEAD
  onClick?: () => void;
  style?: CSSProperties;
}

const index: FC<Props> = ({
  children,
  className,
  id,
  small,
  large,
  medium,
  xlarge,
  onClick,
  style,
}) => {
  return (
    <div
      onClick={onClick}
      className={
        styles.container +
        ` ${className}
        ${small && styles.small}
        ${medium && styles.medium}
        ${large && styles.large}
        ${xlarge && styles.xlarge}`
=======
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
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
      }
      id={id}
      style={style}
    >
<<<<<<< HEAD
      {children}
    </div>
  );
=======
    {children}
  </div>;
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
};

export default memo(index);
