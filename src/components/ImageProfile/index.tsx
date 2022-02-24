import { BtnPrimary } from 'components';
import Image, { StaticImport } from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { browser } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
  src: string | StaticImport;
  onClick?: () => void;
  title?: string;
  website?: string;
}

const index: FC<Props> = ({src, className, id, onClick, title, website}) => {
  return <div className={styles.container + ` ${className}`} id={id} onClick={onClick}>
    
    <Image src={src} alt='profile' className={styles.image} />
    
    {title && <BtnPrimary title={title} blue onClick={()=>console.log('change logo')} />}
    
    {website && <Link href={'https://www.google.com'}>
      <a><BtnPrimary  title={website} inIcon={browser} /></a>
    </Link>}
    
  </div>;
};

export default index;