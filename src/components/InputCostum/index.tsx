import Image from 'next/image';
import React, { ChangeEvent, CSSProperties, FC, HTMLInputTypeAttribute, memo, ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  id?: string;
  inIcon?: string;
  endIcon?: string;
  size?: number;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  defaultValue?: string | number;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  onClick?: () => void;
}

const index: FC<Props> = ({ children, className, id, inIcon, endIcon, size, type, placeholder, value, defaultValue, onChange, style, onClick}) => {
  return <div className={styles.container + ` ${className}`} id={id}>

    {inIcon && <Image onClick={onClick} src={process.env.NEXT_PUBLIC_BASE_PATH + inIcon} width={size||22} height={size||22} />}

    <input 
      name={id} id={id} 
      type={type|| 'text'} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      style={style}
      defaultValue={defaultValue}
    />

    {children}

    {endIcon && <Image onClick={onClick} src={process.env.NEXT_PUBLIC_BASE_PATH + endIcon} />}

  </div>;
};

export default memo(index);