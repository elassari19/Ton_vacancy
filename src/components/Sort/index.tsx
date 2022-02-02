import React, { FC } from 'react';
import styles from './styles.module.scss';
import { swap } from '../../../public';
import Image from 'next/image';

interface Props {
  className?: string;
  id?: string;
}

const index: FC<Props> = ({ className, id}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    <Image src={swap} />
    <input name='sort' id='sort'  placeholder='Standart sorting' />
    <datalist id="sort">
      <option value="0">0</option>
      <option value="1">1</option>
    </datalist>

  </div>;
};

export default index;