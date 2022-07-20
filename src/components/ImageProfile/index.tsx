import { BtnPrimary, Input } from 'components';
<<<<<<< HEAD
import Image, { StaticImageData } from 'next/image';
=======
import Image from 'next/image';
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
import Link from 'next/link';
import React, { FC, FormEvent } from 'react';
import { browser } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
<<<<<<< HEAD
  src: string | StaticImageData;
=======
  src: string ;
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
  onClick?: () => void;
  title?: string;
  website?: string;
  onChange?: (ev: any)=>void;
}

const index: FC<Props> = ({src, className, id, onClick, title, website, onChange}) => {
  return <div className={styles.container + ` ${className}`} id={id} onClick={onClick}>

    <Image src={src} alt='profile' className={styles.image} />

    {
    title && <div className={styles.relative}>
        <BtnPrimary title={title} blue onClick={()=>console.log('change logo')} />
        <input type='file' name='image' className={styles.photo} onChange={onChange} />
      </div>
    }

    {website && <Link href={'https://www.google.com'}>

      <a><BtnPrimary  title={website} inIcon={browser} /></a>

    </Link>}

  </div>;
};

export default index;