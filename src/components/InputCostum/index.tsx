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

<<<<<<< HEAD
    {inIcon && <Image onClick={onClick} src={inIcon} width={size||22} height={size||22} alt='Image' />}
=======
    {inIcon && <Image onClick={onClick} src={inIcon} width={size||22} height={size||22} />}
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5

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

<<<<<<< HEAD
    {endIcon && <Image onClick={onClick} src={endIcon} alt='Image' />}
=======
    {endIcon && <Image onClick={onClick} src={endIcon} />}
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5

  </div>;
};

export default memo(index);