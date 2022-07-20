import React, { CSSProperties, FC, memo } from 'react';
import styles from './styles.module.scss'
import {swap} from '../../../public'
import Image from 'next/image';

interface Props {
  className?: string;
  id?: string;
  placeholder?: string;
  name: string;
  values: string[];
  endIcon?: string;
  inIcon?: string;
  style?: CSSProperties;
}

const index: FC<Props> = ({ className, id, values, name, style, placeholder, inIcon, endIcon}) => {
  return <div className={styles.container + ` ${className}`} id={id} style={style}>
<<<<<<< HEAD
    { inIcon && <Image src={inIcon} alt='Image' />}
=======
    { inIcon && <Image src={inIcon} />}
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
    <select placeholder={placeholder} name={name}>
      {
        values?.map(item=><option key={item} value={item}>{item}</option>)
      }
    </select>
<<<<<<< HEAD
    { endIcon && <Image src={endIcon} alt='Image' />}
=======
    { endIcon && <Image src={endIcon} />}
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
  </div>
};

export default memo(index);