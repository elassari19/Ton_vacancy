import { BtnPrimary } from 'components';
import Image from 'next/image';
import React, { createRef, FC, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { color } from 'theme';
import { persons, personsWhite, suitCase, suitCaseWhite, telegram } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
  onClick?: () => void;
  setIsModal: (bool: boolean) => void;
}

const index: FC<Props> = ({ className, id, onClick, setIsModal}) => {

  const [employer, setEmployer] = useState(true);
  const accept = createRef<HTMLInputElement>();
  const handelTelegram = () => { 
    accept.current?.checked && setIsModal(false);
    // console.log(accept.current?.checked)
   }

  return <div className={styles.container + ` ${className}`} id={id} >

    <div >

    <div className={styles.item} >
      <div>
        <span>Sing up</span>
        <span onClick={onClick} style={{cursor: 'pointer'}}>X</span>
      </div>
      <div>
        <BtnPrimary title='I am employer' 
          blueDark={employer?true:false} grayLight={!employer?true:false} 
          onClick={()=>setEmployer(true)}
          style={{color: !employer?color.gray:'#fff'}}
          inIcon={employer?suitCase:suitCaseWhite} className={styles.button}
        />
        <BtnPrimary title='I am applicant' 
          blueDark={!employer?true:false} grayLight={employer?true:false} 
          onClick={()=>setEmployer(false)}
          style={{color: employer?color.gray:'#fff'}}
          inIcon={employer?persons:personsWhite} className={styles.button} 
        />
      </div>

      <div className={styles.telegram} onClick={handelTelegram}>
        <Image src={telegram} />
        <span>Sign up with telegram</span>
      </div>

      <div className={styles.rules}>
        <label htmlFor="rules">
          <input type="checkbox" ref={accept} id="rules" className="form-check-input outline-0" />
          <span>Соглашаюсь с правилами сайта и политикой конфиденциальности</span>
        </label>
      </div>

    </div>
    </div>
  </div>
};

export default index;