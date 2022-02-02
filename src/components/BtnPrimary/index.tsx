import Image from 'next/image';
import React, { CSSProperties, FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  id?: string;
  white?: boolean;
  blue?: boolean;
  blueDark?: boolean;
  green?: boolean;
  greenDark?: boolean;
  title: string;
  onClick?: () => void
  inIcon?: string;
  endIcon?: string;
  style?: CSSProperties;
}

const index: FC<Props> = ({title, id, white, blue, blueDark, green, greenDark, onClick, inIcon, endIcon, style}) => {
  const color = blue?'blue':blueDark?'blueDark':green?'green':greenDark?'greenDark':white?'white': 'none';
  return <div
    id={id}
    onClick={onClick}
    className={styles.container + ` ${styles[color]}`}
    style={style}
  >
    {inIcon&&<Image color={'#fff'} src={inIcon} height={15} />} {title} {endIcon&&<Image color={'#fff'} src={endIcon} height={15} />}
  </div>;
};

export default index;
