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
<<<<<<< HEAD
    <Image src={notePencil} alt='Image'/> Underemployment 
=======
    <Image src={notePencil}/> Underemployment 
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
  </div>;
};

export default index;