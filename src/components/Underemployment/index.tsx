import Image from 'next/image';
import React, { FC } from 'react';
import { notePencil } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
  onClick?: ()=>void;
}

const index: FC<Props> = ({ className, id, onClick}) => {
  return <div className={styles.container + ` ${className}`} id={id} onClick={onClick}>
    <Image src={process.env.NEXT_PUBLIC_BASE_PATH + notePencil}/> Underemployment 
  </div>;
};

export default index;