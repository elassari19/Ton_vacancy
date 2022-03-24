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
    <Image src={process.env.NEXT_PUBLIC_BASE_PATH + User}/>
     12.y.o. 
     <Image src={process.env.NEXT_PUBLIC_BASE_PATH + Clock}/> <span>UTC+14:00</span>
  </div>;
};

export default index;