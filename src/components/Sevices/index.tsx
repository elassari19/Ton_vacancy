import { Card } from 'layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { browser, celebration, Clock, dollar, gift, heart, Tag } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
}

const index: FC<Props> = ({ className, id}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
      <Card shadow className={styles.container + ` ${className}`} id={id}>

        <Row>
          <Col xs={6}>
<<<<<<< HEAD
            <Image src={celebration} alt='Image'/>
            <span>Corporate events</span>
          </Col>
          <Col xs={6}>
            <Image src={heart} alt='Image'/>
=======
            <Image src={celebration}/>
            <span>Corporate events</span>
          </Col>
          <Col xs={6}>
            <Image src={heart}/>
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
            <span>Health insurance</span>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
<<<<<<< HEAD
            <Image src={Tag} alt='Image'/>
            <span>Employee discounts</span>
          </Col>
          <Col xs={6}>
            <Image src={gift} alt='Image'/>
=======
            <Image src={Tag}/>
            <span>Employee discounts</span>
          </Col>
          <Col xs={6}>
            <Image src={gift}/>
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
            <span>Bonuses and premiums</span>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
<<<<<<< HEAD
            <Image src={Clock} alt='Image'/>
            <span>Flexible schedule</span>
          </Col>
          <Col xs={6}>
            <Image src={dollar} alt='Image'/>
=======
            <Image src={Clock}/>
            <span>Flexible schedule</span>
          </Col>
          <Col xs={6}>
            <Image src={dollar}/>
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
            <span>Regular salary review</span>
          </Col>
        </Row>
      </Card>
      <Row>

      <Link href={'https://www.google.com'}>
        <a className={styles.anchor}>
<<<<<<< HEAD
          <Image src={browser} alt='Image'/>
=======
          <Image src={browser}/>
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
          <span>Visit website</span>
        </a>
      </Link>
    </Row>

  </div>;
};

export default index;