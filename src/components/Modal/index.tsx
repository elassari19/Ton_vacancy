import { BtnPrimary } from 'components';
import Image from 'next/image';
import React, { useRef, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'store/signIn/constants';
import { signUP } from 'store/signUp/constants';
import { color } from 'theme';
import { persons, personsWhite, suitCase, SuitcaseWhite, telegram } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
  onClick?: () => void;
  setIsModal: (bool: boolean) => void;
  type?: string;
}

const index: FC<Props> = ({ className, id, onClick, setIsModal, type}) => {

  const dispatch = useDispatch();

  const [employer, setEmployer] = useState(true);

  const accept = useRef<any>();

  const handleSubmit = () => {
    if( (accept.current?.checked && type == '') || type == 'sign') {
      dispatch(signUP(employer))
      dispatch(signIn());
      setIsModal(false);
    };
  }


  return <div className={styles.container + ` ${className}`} id={id} >

    <div >

    <div className={styles.item} >
      <div>
        <span>{type != 'sign' ? 'Sing up' : 'Sign in'}</span>
        <span onClick={onClick} style={{cursor: 'pointer'}}>X</span>
      </div>
      {
        type != 'sign' &&
        <div>
          <BtnPrimary title='I am employer' 
            blueDark={employer?true:false} grayLight={!employer?true:false} 
            onClick={()=>setEmployer(true)}
            style={{color: !employer?color.gray:'#fff'}}
            inIcon={employer?suitCase:SuitcaseWhite} className={styles.button}
          />
          <BtnPrimary title='I am applicant' 
            blueDark={!employer?true:false} grayLight={employer?true:false} 
            onClick={()=>setEmployer(false)}
            style={{color: employer?color.gray:'#fff'}}
            inIcon={employer?persons:personsWhite} className={styles.button} 
          />
        </div>
      }


      <div className={styles.telegram} onClick={handleSubmit}>
        <Image src={telegram} />
        <span>{type != 'sign' ? 'Sign up' : 'Sign'} with telegram</span>
      </div>

      {
        type != 'sign' &&
        <div className={styles.rules}>
          <label htmlFor="rules">
            <input type="checkbox" ref={accept} id="rules" className="form-check-input outline-0" />
            <span>I agree with the site rules and privacy policy</span>
          </label>
        </div>
      }

    </div>
    </div>
  </div>
};

export default index;