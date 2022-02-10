import { Tips } from 'components';
import { Card } from 'layout';
import Image from 'next/image';
import React, { FC, memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { color } from 'theme';
import { market, persons, profile } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
  onClick?: () => void;
}

const index: FC<Props> = ({ className, id, onClick}) => {
  return <Row className={styles.container + ` ${className}`} onClick={onClick}>
      <Col xs={{offset: 1, span:8}} md={{offset: 0, span: 3}}>
      <Image src={profile} alt='profile' />
    </Col>
    <Col xs={12} md={8}>
      
      <Row>
        <h3>Amazon Inc.</h3>
        <Tips title='10 000 open vacany' style={{fontSize: 14, color: color.green, fontWeight: '500'}} />
      </Row>
      
      <Row>
        <p className='text-secondary'>Pleased him another was settled for. Moreover end horrible endeavor entrance any families</p>
      </Row>
      
      <Row>
        <div className={styles.flex}>
        <div className={styles.flex}>
          <Image src={persons} alt='persons' />
          <p className='text-bolder'>more than 500 employees</p>
        </div>
        <div className={styles.flex}>
          <Image src={market} alt='market' />
          <p className='text-bolder'>15 years on the market</p>
        </div>
        </div>
      </Row>

    </Col>
  </Row>;
};

export default memo(index);