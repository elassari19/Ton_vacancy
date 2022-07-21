import React, { createElement, FC, memo, ReactNode } from 'react';
import styles from './styles.module.scss'

interface Props {
  children?: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  content?: string;
  size?: string; // font-size
  tag: string; // html element tag
}

const index: FC<Props> = ({children, className, size, tag, id, title, content}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    {createElement(tag, {className: styles[size||'xs']}, title)}
    {
      content?.split('<br/>').map((par, idx)=>(
        <p key={idx}>{par}</p>
      ))
    }
    <div>
      {children}
    </div>
  </div>;
};

export default memo(index);