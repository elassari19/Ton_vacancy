import React, { FC, memo } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import {browser, celebration, Clock, dollar, gift, heart, market, persons, profile, Tag} from '../../../../public';
import { BtnPrimary, Companies, Crypto, Heading, Sevices, Tips, Underemployment, Vacancy, YearsAndTime } from 'components';
import { useRouter } from 'next/router';
import { Card } from '../../../layout'
import { color } from 'theme';
import Link from 'next/link';

interface Props {
  person: any;
}

const index: FC<Props> = ({person}) => {

  const route = useRouter();

  return <div className={styles.container}>

    {/* TON VACANCY brand */}
    <Row className={styles.brand} >
      <Col >
        TON VACANCY
      </Col>
    </Row>

    {/* companie informations */}
    <Row className={styles.info}>

      <Col xs={12} lg={7}>
        <Row>

          {/* companie image and url */}
        <Col xs={6}  lg={4}>
          <Image src={profile} className={styles.image} />
          <Row>
            <Link href={'google.com'}>
              <a className={styles.anchor}>
                <Image src={browser}/>
                <span>Visit website</span>
              </a>
            </Link>
          </Row>
        </Col>

        {/* companie description */}
        <Col xs={12} md={8} className={styles.companies}>
          <Companies
            title='Amazon Inc.'
            desc='Marianne or husbands if at stronger ye. Considered is as middletons uncommonly. Promotion perfectly ye consisted so. His chatty dining for effect ladies active. Equally journey wishing not several behaved chapter she two sir. Deficient procuring favourite extensive you two'
            onMarket='15'
            employees='1500'
          />
        </Col>

        </Row>
      </Col>

      {/* companie sevices */}
      <Col xs={12} lg={5} className='my-md-4 my-sm-5'>
        <Sevices />
      </Col>

    </Row>

    {/* section of vacancies */}
    <Row className={styles.vacancies }>
      <Col xs={12} lg={8}>

        <h3 className='mt-4 mb-3'>Vacancies</h3>

        <Vacancy />
        <Vacancy />
        <Vacancy />
      </Col>
    </Row>
  </div>;
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const data = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params?.id}`);
//     const person = await data.json();

//     return {
//       props: {
//         person,
//       },
//     };
//   } catch {
//     context.res.statusCode = 404;
//     return {
//       props: {},
//     };
//   }
// };

export default memo(index);

