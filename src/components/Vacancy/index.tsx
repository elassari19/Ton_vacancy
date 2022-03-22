import { BtnPrimary } from 'components';
import { Card } from 'layout';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { fire, location, deleted, reload } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: number;
  date?: string | number;
  price?: string | number;
  desc?: string;
  shadow?: boolean;
  title?: string;
  local?: string;
  auth?: boolean;
  opened?: boolean;
}

const index: FC<Props> = ({ className, id, date, desc, title, price, local, shadow, auth, opened}) => {

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

        <Col xs={3} className='px-1'>
          <BtnPrimary title='Featured' inIcon={fire} className={styles.featured + ` p-1 px-3`} />
        </Col>

        {
          auth && <Col xs={{offset: 2}}>
            <BtnPrimary title='' inIcon={opened ? deleted : reload} style={{marginLeft: '3rem'}} />
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
          <BtnPrimary title={local || 'Estonia, Tallinn'} inIcon={location}/>
        </Col>
      </Row>
    </Card>
  </div>;
};

export default index;