import React, { FC, memo, useCallback, useState } from 'react';
// import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Col,  Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import {browser, profile} from '../../../../public';
import { BtnPrimary, Companies, Pagination, Sevices, Vacancy, NoVacancy } from '../../../components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { State } from 'store';
import { BrandPage } from 'layout';

interface Props {
  vacancy: any;
}

const index: FC<Props> = ({vacancy}) => {

  const {auth} = useSelector((pre: State)=>pre.auth);

  const route = useRouter();

  const [opened, setOpened] = useState(true)

  const [active, setActive] = useState<number>(8);
  // this method return the items (vacany) whish must be display in this page considered by number of page
  const item = Array(45).fill('').map(
    (_,idx)=> (idx>=(active-1)*3&&idx<=(active-1)*3+2) ? <Vacancy opened={opened} auth={auth} key={idx} id={idx} shadow />: null
  );

  return <BrandPage className={styles.container}>

    {/* companie informations */}
    <Row className={styles.info}>

      <Col xs={12} lg={7}>
        <Row>

          {/* companie image and url */}
        <Col xs={6}  lg={4}>
          <Image src={process.env.NEXT_PUBLIC_BASE_PATH! + profile} className={styles.image} />
          <Row>
            <Link href={'https://www.google.com'}>
              <a className={styles.anchor}>
                <Image src={process.env.NEXT_PUBLIC_BASE_PATH + browser}/>
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
      <Col xs={12} lg={5}>
        <Sevices className='mt-3' />
      </Col>

    </Row>

    {
      vacancy!=true
      ?<>
        {/* section of vacancies */}
        <Row className={styles.vacancies }>
          <Col xs={12} lg={8}>

            <h3 className='mt-4 mb-3'>Vacancies</h3>

            <Row>
              <Col className='d-flex flex-row p-0'>
                <div className={opened ? styles.active : ''}>
                  <BtnPrimary title='Opened vacancies' onClick={()=>setOpened(true)} />
                  <div />
                </div>
                <div className={!opened ? styles.active : ''}>
                  <BtnPrimary title='Archieved vacancies' onClick={()=>setOpened(false)} />
                  <div />
                </div>
              </Col>
              {
                auth &&
                <Col lg={{offset: 2, span: 3}}>
                  <BtnPrimary title='Publish vacancy' blue className='px-0' onClick={() => route.push('/companies/publishVacancy')} />
                </Col>
              }
            </Row>

            {
              item.map((item,idx)=>item&&item)
            }
    
          </Col>
        </Row>
    
        {/* pagination */}
        <Row className={styles.pagination}>

            <Col lg={{offset:0, span: 2}} xs={{offset: 3, span: 6}}> <BtnPrimary title='Load more' blue /> </Col>

            <Col xs={12} lg={6} className={styles.flex}>

              <Pagination length={Math.ceil(15)} active={active} setActive={setActive} />

            </Col>

        </Row>
      </>
      :<NoVacancy />
    }

  </BrandPage>;
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

