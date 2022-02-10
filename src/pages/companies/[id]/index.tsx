import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss'

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const index: FC<Props> = ({children, className, id}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    details
  </div>;
};

export default index;