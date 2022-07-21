import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss'

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  marginTop?: number;
}

const index: FC<Props> = ({children, className, id, marginTop}) => {
  return <div className={styles.container + ` ${className}`} id={id} style={{marginTop: marginTop}}>
    <div className={styles.brand}>
      <span>TON VACANCY</span>
    </div>
    {children}
  </div>;
};

export default index;