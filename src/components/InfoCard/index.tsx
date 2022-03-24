import { BtnPrimary, Crypto, Heading, Tips, Underemployment, YearsAndTime } from 'components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, memo} from 'react';
import { Col, Row } from 'react-bootstrap';
import { profile} from '../../../public';
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
          <Image src={process.env.NEXT_PUBLIC_BASE_PATH!+profile} width={130} height={130} />
        </Col>
        <Col xs={6} className={styles.info}>
          <div className={styles.head}>
            <Heading tag='h4' title='Full-stack developer' md style={{color: '#8C8F9F'}} />
            <Heading tag='h4' title='Jane Smith-Robberton' md />
          </div>
          <Underemployment />
          <YearsAndTime />
        </Col>
      </Row>

      <Row className={styles.tips}>
        <Tips title='Frontend developing' />
        <Tips title='Backend developing' />
        <Tips title='IT' />
        <Tips title='UI/UX' />
      </Row>

      <Crypto haveExperience />

      <Row className={styles.portfulio}>
        <h5>Portfultio</h5>
        <p>Applicant didn’t fiil up portfolio yet</p>
      </Row>

      <Row className={styles.userContact}>
        <Col><BtnPrimary onClick={()=>route.push('/')} title='Send a message' blue className='p-2 m-1'/></Col>
        <Col><BtnPrimary onClick={()=>route.push(`/workers/${id}`)} title='Open profile' grayLight className='p-2 m-1'/></Col>
      </Row>

    </div>
};

export default memo(index);