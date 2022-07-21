import Image from 'next/image';
import React, { CSSProperties, FC, memo } from 'react';
import styles from './styles.module.scss';


interface Props {
  id?: string;
  className?: string;
  white?: boolean;
  blue?: boolean;
  blueLight?: boolean;
  blueDark?: boolean;
  green?: boolean;
  greenDark?: boolean;
  grayLight?: boolean;
  title: string;
  onClick?: (bool?: any) => void;
  inIcon?: string;
  endIcon?: string;
  style?: CSSProperties;
}

const index: FC<Props> = ({title, id, className, white, blue, blueLight, blueDark, green, greenDark, grayLight, onClick, inIcon, endIcon, style}) => {

  const color = blue?'blue':blueDark?'blueDark':green?'green':greenDark?'greenDark':white?'white':grayLight?'grayLight': blueLight ? 'blueLight' : 'none';

  return <div
    onClick={onClick}
    className={styles.container + ` ${styles[color]} ${className} `}
    id={id}
    style={style}
  >
    {
      inIcon&&<Image color={'#fff'} src={inIcon} alt='Image'/>
    }
    <span>{title}</span>
    {
      endIcon&&<Image color={'#fff'} src={endIcon} alt='Image'  />
    }

  </div>;
};

export default memo(index);