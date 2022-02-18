import { BtnPrimary } from 'components';
import { Card } from 'layout';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { fire, location } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: number;
  date?: string | number;
  price?: string | number;
  desc?: string;
  image?: string;
  shadow?: boolean;
  title?: string;
  location?: string;
}

const index: FC<Props> = ({ className, id, image, date, desc, title, price, location, shadow}) => {

  const route = useRouter();
  // console.log(route.query)

return <div
          className={styles.container + ` ${className}`}
          id={id?.toString()}
          onClick={()=>route.push(`/companies/${id}/vacancy`)}
        >
    <Card shadow={shadow} >

      <Row className={styles.item}>
        <Col xs={5}>
          <span>{date || 'Published 6 hours ago - July, 23 16:00'}</span>
        </Col>
        {
          image && <Col xs={3} className='px-4'>
          <BtnPrimary title='Featured' inIcon={fire} className={styles.featured + ` p-0`} />
        </Col>
        }
      </Row>

      <Row className={styles.title}>{title || 'Expert consultant on work with clients (EdTech + IT)'}</Row>

      <Row className={styles.desc}>{desc || 'At the same time, we are expanding the sale! It is worth being able to go beyond the interphone line, learn how to work in person and online, take part in the calls, go to the recruitment at the conference and work well'}</Row>

      <Row className={styles.price}>
        <Col xs={3}>
          {price || '$1200-$1400'}
        </Col>
        <Col xs={4}>
          <BtnPrimary title={location || 'Estonia, Tallinn'} inIcon={location}/>
        </Col>
      </Row>
    </Card>
  </div>;
};

export default index;