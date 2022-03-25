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
    <Image src={notePencil}/> Underemployment 
  </div>;
};

export default index;