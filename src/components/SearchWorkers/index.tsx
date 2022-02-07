import React, { FC, FormEvent, memo, ReactNode, useState } from 'react';
import { InputCostum } from '..';
import { search } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
}

const index: FC<Props> = ({ className, id }) => {

  const [text, setText] = useState<string>('');
  const handleChange = (ev: FormEvent<HTMLInputElement>) => {
    setText(ev.currentTarget.value);
  };

  return <div className={styles.container + ` ${className}`} id={id}>
    <InputCostum inIcon={search} placeholder='Search' value={text} onChange={handleChange} />
  </div>;
};

export default memo(index);