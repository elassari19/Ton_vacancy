import React, { FormEvent, useState } from 'react';
import { Section } from '../layout';
import { InfoCard, InputCostum, Sort } from '../components';
import Head from 'next/head';
import styles from '../styles/workers.module.scss'
import { search } from '../../public';
import { Col, Row } from 'react-bootstrap';

function index() {

  const [text, setText] = useState<string>('');
  const handleChange = (ev: FormEvent<HTMLInputElement>) => {
    setText(ev.currentTarget.value);
  };

  return <div className={styles.container}>
    <Head>
      <title>Freelancer Search Results - TON_vacancy</title>
      <meta name="keywords" content='Offshore outsourcing, Freelancers, php Programmers, Coders, Developers, Writers, Web Designers, Website Design, Technical Writers' />
      <meta name="description" content="TON work allows you to find the most effective and top employees from all over the world" />
      <link rel="icon" type='image/png' sizes="32x32" href='../../public/logo.png' />
    </Head>
    <div className={styles.container}>

        <Row>
        <Col sm={12} md={9}>
          <Row>
            <Col sm={12} md={8}>
              <InputCostum inIcon={search} placeholder='Search' value={text} onChange={handleChange} />
            </Col>
            <Col sm={12} md={4}>
            {/* <InputCostum id='sort' inIcon={search} placeholder='Standart sorting' value={text} onChange={handleChange} style={{fontSize: 14}}/> */}
            <Sort />
            </Col>
          </Row>
          <Row>
            <InfoCard />
          </Row>
        </Col>
        <Col sm={12}  md={3}>
          filter
        </Col>
        </Row>

    </div>
  </div>;
}

export default index;
