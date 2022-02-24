import Image from 'next/image';
import React, { CSSProperties, FC, FormEvent, HTMLInputTypeAttribute, memo, ReactNode } from 'react';
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
  onChange?: (ev: FormEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
}

const index: FC<Props> = ({ children, className, id, inIcon, endIcon, size, type, placeholder, value, onChange, style}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    {inIcon && <Image src={inIcon} width={size||22} height={size||22} />}
    <input name={id} id={id} type={type|| 'text'} placeholder={placeholder} value={value} onChange={onChange} style={style} />
      {children}
    {endIcon && <Image src={endIcon} />}
  </div>;
};

export default memo(index);