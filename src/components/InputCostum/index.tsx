import Image from 'next/image';
import React, { FC, FormEvent } from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  id?: string;
  inIcon?: string;
  endIcon?: string;
  size?: number;
  placeholder?: string;
  value?: string;
  onChange?: (ev: FormEvent<HTMLInputElement>) => void;
}

const index: FC<Props> = ({ className, id, inIcon, endIcon, size, placeholder, value, onChange}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    {inIcon && <Image src={inIcon} width={size||22} height={size||22} />}
    <input name='sort' id='sort'  placeholder={placeholder} value={value} onChange={onChange} />
    <datalist id="sort">
      <option value="0">0</option>
      <option value="1">1</option>
    </datalist>
    {endIcon && <Image src={endIcon} />}
  </div>;
};

export default index;