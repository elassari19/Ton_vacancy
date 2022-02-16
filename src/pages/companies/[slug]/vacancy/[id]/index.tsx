import React, { FC } from 'react';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
}

const index: FC<Props> = ({children, className, id}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    dynamic vacancy
  </div>;
};

export default index;