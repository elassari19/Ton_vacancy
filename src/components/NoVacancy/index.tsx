import Image from 'next/image';
import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { tip05 } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
}

const index: FC<Props> = ({ className, id}) => {
  return <Row className={styles.container + ` ${className}`} id={id}>
    <Col xs={12} lg={{offset:1,span: 5}}>
      <Image src={tip05} alt='Image' />
    </Col>
    <Col xs={12} lg={{span: 5}} className={styles.vacancy}>
      <p className='h5'>Vacancies</p>
      <p className='h4'>No vacancies yet</p>
      <p className='text-secondary'>This company are not hiring now</p>
    </Col>
  </Row>;
};

export default index;