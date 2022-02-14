import { BtnPrimary } from 'components';
import { Card } from 'layout';
import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { fire, location } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
}

const index: FC<Props> = ({ className, id}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    <Card shadow >

      <Row className={styles.item}>
        <Col xs={5}>
          <span>Published 6 hours ago - July, 23 16:00</span>
        </Col>
        <Col xs={3} className='px-4'>
          <BtnPrimary title='Featured' inIcon={fire} className={styles.featured + ` p-0`} />
        </Col>
      </Row>

      <Row className={styles.title}>Expert consultant on work with clients (EdTech + IT)</Row>

      <Row className={styles.desc}>At the same time, we are expanding the sale! It is worth being able to go beyond the interphone line, learn how to work in person and online, take part in the calls, go to the recruitment at the conference and work well</Row>

      <Row className={styles.price}>
        <Col xs={3}>
          $1200-$1400
        </Col>
        <Col xs={4}>
          <BtnPrimary title='Estonia, Tallinn' inIcon={location}/>
        </Col>
      </Row>
    </Card>
  </div>;
};

export default index;