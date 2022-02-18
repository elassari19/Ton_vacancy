import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import Image from 'next/image';
import {browser, profile, celebration, heart, Tag, vector} from '../../../../../public';
import Link from 'next/link';
import { BtnPrimary, Vacancy } from '../../../../components';

const index: FC = () => {
  return <div>
    {/* TON VACANCY brand */}
    <Row className={styles.brand} >
    <Col >
      TON VACANCY
    </Col>
    </Row>

    <Row className={styles.container}>

      {/* vacancy image */}
      <Col xs={{offset: 2, span: 8}} lg={{offset: 0, span: 3}}>
      <Image src={profile} className={styles.image} />
          <Row className='text-center'>
            <span className='h5'>Amazon Inc.</span>
            <span className='h6 text-secondary'>Marketplace</span>
            <Link href={'https://www.google.com'}>
              <a className={styles.anchor}>
                <Image src={browser}/>
                <span>Visit website</span>
              </a>
            </Link>
          </Row>
      </Col>

      {/* vacancy details */}
      <Col xs={{ span: 12}} lg={9}>
        <Row>
        <Col lg={10}>
          <Row className={styles.benefices}>
          <Col lg={4} >
              <Image src={celebration} />
              <span>Corporate events</span>
            </Col>
            <Col lg={4} >
              <Image src={heart} />
              <span>Health insurance</span>
            </Col>
            <Col lg={4} >
              <Image src={Tag} />
              <span>Employee discounts</span>
            </Col>
          </Row>
        </Col>

        <Col lg={2}></Col>

        </Row>

        <Row className={styles.vacancy}>
          <Col lg={10}><Vacancy desc=' ' /></Col>
          <Col lg={2} className={styles.btn}><BtnPrimary title='Send CV' blue style={{padding: 5}} onClick={()=>console.log('CV')} /></Col>
          <span>We are searching for a strong Junior Web Developer to join our team!</span>
        </Row>

      </Col>

    </Row>

    <Row>
      <Col lg={7} className={styles.details}>
      <span className='h4'>Responsibilities:</span>
      <BtnPrimary title='Build responsive HTML content from scratch;' inIcon={vector} />
      <BtnPrimary title='Develop and maintain websites based on guidelines provided by business partners;' inIcon={vector} />
      <BtnPrimary title='Develop new web features to be used on different sites.' inIcon={vector} />
      <br />
      <span className='h4'>Requirements:</span>
      <BtnPrimary title='At least 1 year of commercial experience with web technologies;' inIcon={vector} />
      <BtnPrimary title='Experience in PHP 7;' inIcon={vector} />
      <BtnPrimary title='Understanding of MVC PHP (Laravel as an advantage);' inIcon={vector} />
      <BtnPrimary title='Experience in MSSQL/My SQL;' inIcon={vector} />
      <BtnPrimary title='English - intermediate.' inIcon={vector} />
      <br />
      <span className='h4'>The Project:</span>
      <div>
        <p>As global leaders of online gaming entertainment, we are committed to a proactive policy of corporate and social responsibility that reflects the high professional and ethical standards we have set for ourselves.</p>
        <p>We are constantly creating new and innovative ways to create a caring, responsible gaming environment and to ensure all those who visit our site can do so with confidence and safety.</p>
        <p>We are responsible for our employees who work with us worldwide. We must provide an enjoyable work environment where people are challenged and motivated to excel, where the flare is rewarded, compensation is fair and the balance between work and family is respected. Individual development is encouraged and advancement is based solely on merit. We must always invest in developing our employees so that they can achieve their personal aspirations.</p>
        <p>All employees should expect their managers to be capable, knowledgeable and motivating. We must always treat our suppliers and other partners with respect, enabling them to make a fair profit. We will never expose our employees to regulatory risk and all employees should be comfortable that their actions are just and ethical.</p>
    </div>
    </Col>
    </Row>

      <Col xs={12} lg={4}>
    <Row>
        <Col lg={5} className={styles.btn}><BtnPrimary title='Send CV' blue style={{padding: 5}} onClick={()=>console.log('CV')} /></Col>
        <Col lg={7} className={styles.btn}><BtnPrimary title='Send message' white style={{padding: 5}} onClick={()=>console.log('CV')} /></Col>
    </Row>
      </Col>

  </div>

}

export default index