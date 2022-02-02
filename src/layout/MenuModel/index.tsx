import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss'

interface Props {
  onClick: ()=>void
  children: ReactNode;
  className?: string;
  id?: string;}

const index: FC<Props> = ({children, className, id, onClick}) => {
  return <div className={styles.container + ` ${className}`} id={id} onClick={onClick}>
    {children}
  </div>;
};

export default index;