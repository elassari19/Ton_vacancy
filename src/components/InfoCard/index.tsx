import { BtnPrimary, Heading } from 'components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, memo} from 'react';
import { Col, Row } from 'react-bootstrap';
import { Clock, notePencil, profile, User } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
}

const index: FC<Props> = ({ className, id}) => {

  const route = useRouter();

  return <div className={styles.container + ` ${className}`} id={id}>

      <Row>
        <Col xs={6} className={styles.image}>
          <Image src={profile} width={130} height={130} />
        </Col>
        <Col xs={6} className={styles.info}>
          <div className={styles.head}>
            <Heading tag='h4' title='Full-stack developer' md style={{color: '#8C8F9F'}} />
            <Heading tag='h4' title='Jane Smith-Robberton' md />
          </div>
          <div className={styles.underemployment} > <Image src={notePencil}/> Underemployment </div>
          <div className={styles.user}> <Image src={User}/> 12.y.o. <Image src={Clock}/> <span>UTC+14:00</span> </div>
        </Col>
      </Row>

      <Row className={styles.tips}>
        <div>Frontend developing</div>
        <div>Backend developing</div>
        <div>IT</div>
        <div>UI/UX design</div>
      </Row>

      <Row className={styles.crypto + ' ' + styles.cryptoNo}>
        <div>X</div>
        <div>
          <div>Crypto projects</div>
          <p>Have experience in crypto projects</p>
        </div>
      </Row>

      <Row className={styles.portfulio}>
        <h5>Portfultio</h5>
        <p>Applicant didn’t fiil up portfolio yet</p>
      </Row>

      <Row className={styles.userContact}>
        <Col><BtnPrimary onClick={()=>route.push('/')} title='Send a message' blue className='p-2 m-1'/></Col>
        <Col><BtnPrimary onClick={()=>route.push('/details')} title='Open profile' grayLight className='p-2 m-1'/></Col>
      </Row>

    </div>
};

export default memo(index);