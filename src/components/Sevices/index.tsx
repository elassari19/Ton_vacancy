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
            <Image src={celebration}/>
            <span>Corporate events</span>
          </Col>
          <Col xs={6}>
            <Image src={heart}/>
            <span>Health insurance</span>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Image src={Tag}/>
            <span>Employee discounts</span>
          </Col>
          <Col xs={6}>
            <Image src={gift}/>
            <span>Bonuses and premiums</span>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Image src={Clock}/>
            <span>Flexible schedule</span>
          </Col>
          <Col xs={6}>
            <Image src={dollar}/>
            <span>Regular salary review</span>
          </Col>
        </Row>
      </Card>
      <Row>

      <Link href={'https://www.google.com'}>
        <a className={styles.anchor}>
          <Image src={browser}/>
          <span>Visit website</span>
        </a>
      </Link>
    </Row>

  </div>;
};

export default index;