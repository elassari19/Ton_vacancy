import React, { FC, memo } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import {browser, market, persons, profile} from '../../../../public';
import { BtnPrimary, Companies, Crypto, Heading, Tips, Underemployment, YearsAndTime } from 'components';
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

    <Row className={styles.brand} >
      <Col >
        TON VACANCY
      </Col>
    </Row>

    <Row >

      <Col xs={12} md={8}>
        <Row className={styles.info}>
        <Col xs={12} md={4}>
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

      <Col xs={12} md={4}>
        sfsfd
      </Col>

    </Row>

    <Row className={styles.portfolio }>

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

