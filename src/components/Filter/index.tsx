<<<<<<< HEAD
/* eslint-disable react-hooks/rules-of-hooks */
=======
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
import { BtnPrimary, EmploymentType, Heading, InputRange } from 'components';
import React, { FC, memo, useState } from 'react';
import { Row } from 'react-bootstrap';
import { arrow, vector } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
}

export type IValue = {
  min: string;
  max: string;
}

<<<<<<< HEAD
const index: FC<Props> = ({className, id}) => {
=======
const index: FC<Props> = ({children, className, id}) => {
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5

  const [value, setValue] = useState<IValue>({min: '18', max: '50'});

  return <div className={styles.container + ` ${className}`} id={id}>
    <Row><Heading tag='h2' title='Filter' /></Row>
    <Row><Heading tag='h3' md title='Category' /></Row>
    <Row> <BtnPrimary title='HR Group Leading Specialist' inIcon={vector} endIcon={arrow} /> </Row>
    <Row className={styles.tech}>
      <BtnPrimary title='IT technologies - Development' inIcon={vector} endIcon={arrow} style={{ color: '#3B86C6' }} />
      <p onClick={()=>console.log('frontend')}>Frontend development</p>
      <p onClick={()=>console.log('backend' )}>Backend development</p>
      <p onClick={()=>console.log('fullstack')}>Full-stack development</p>
    </Row>
    <Row> <BtnPrimary title='Chief Project Engineer' inIcon={vector} endIcon={arrow} /> </Row>
    <Row> <BtnPrimary title='Chief Specialist-Expert of the Legal Support Department' inIcon={vector} endIcon={arrow} /> </Row>
    <Row> <BtnPrimary title='UX/UI designer' inIcon={vector} endIcon={arrow} /> </Row>
    <Row className={styles.btn}> <BtnPrimary title='Show all' blueLight /> </Row>
    <Row><InputRange value={value} setValue={setValue} /></Row>
    <Row><EmploymentType /></Row>
  </div>;
};

export default memo(index);