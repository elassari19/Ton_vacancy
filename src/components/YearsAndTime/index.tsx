import Image from 'next/image';
import React, { FC } from 'react';
import { Clock, User } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
}

const index: FC<Props> = ({ className, id}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    <Image src={User} alt='Image'/>
     12.y.o. 
     <Image src={Clock} alt='Image'/> <span>UTC+14:00</span>
  </div>;
};

export default index;