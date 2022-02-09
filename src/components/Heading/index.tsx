import React, { CSSProperties, FC, memo } from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  id?: string;
  xs?: boolean; 
  sm?: boolean; 
  md?: boolean; 
  lg?: boolean;
  tag?: string;
  title: string;
  color?: string;
  style?: CSSProperties;
}

const index: FC<Props> = ({ className, id, xs, sm, md, lg, tag, title, color, style}) => {

  const size = xs?'xs':sm?'sm':md?'md':lg?'lg':'xl'
  const paragraph = title.split('</br>');

  return <div
    className={styles.container} id={id} style={{...style, color: color}}
  >
    {
      tag=='h1'
      ?<h1 className={styles[size]+ ` ${className}`}>{title}</h1>
      :tag=='h2'
      ?<h2 className={styles[size]+ ` ${className}`}>{title}</h2>
      :tag=='h3'
      ?<h3 className={styles[size]+ ` ${className}`}>{title}</h3>
      :tag=='h4'
      ?<h4 className={styles[size]+ ` ${className}`}>{title}</h4>
      :tag=='h5'
      ?<h5 className={styles[size]+ ` ${className}`}>{title}</h5>
      :<h6 className={styles[size]+ ` ${className}`}>{title}</h6>
    }
  </div>;
};

export default memo(index);