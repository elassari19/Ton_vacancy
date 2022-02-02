import React, { FC } from 'react';
import styles from './styles.module.scss'
import {swap} from '../../../public'
import Image from 'next/image';

interface Props {
  className?: string;
  id?: string;
}

const index: FC<Props> = ({ className, id}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    <Image src={swap} />
    <select placeholder={'Standart sorting'} name='sort'>
      <option value="newest">newest</option>
      <option value="oldest">oldest</option>
    </select>
  </div>
};

export default index;