import React, { FC, memo } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import {profile} from '../../../../public';
import { BtnPrimary, Crypto, Heading, Underemployment, YearsAndTime } from 'components';
import { useRouter } from 'next/router';
import { Card } from '../../../layout'
import { color } from 'theme';

interface Props {
  person: any;
}

const index: FC<Props> = ({person}) => {

  const { name, address } = person;
  const route = useRouter();

  return <div className={styles.container}>

    <Row className={styles.brand} >
      <Col >
        TON VACANCY
      </Col>
    </Row>

    <Row className={styles.info}>

      {/* profile left */}
      <Col xs={12} md={7}>
        <Row className={styles.person}>
          {/* profile image */}
          <Col xs={12} md={5} style={{position: 'relative'}}>
            <Image src={process.env.NEXT_PUBLIC_BASE_PATH! + profile} className={styles.Image} width={245} height={245} />
            <div className={styles.green} />
          </Col>
          {/* profile title */}
          <Col xs={12} md={7}>
            <Heading tag='h4' md title='Full-stack developer' style={{color: '#a5a5a5'}} />
            <Heading tag='34' lg title='Jane Smith-Robberton' style={{color: '#000'}} />
            <Crypto />
          </Col>
        </Row>
      </Col>

      {/* profile right */}
      <Col xs={12} md={5}>
        <Card shadow className={styles.person} >
          <Underemployment  className='p-1'/>
          <YearsAndTime  className='p-1'/>
          <Col xs={12} md={6}><BtnPrimary onClick={()=>route.push('/')} title='Send a message' blue className='p-2'/></Col>
        </Card>
      </Col>
    </Row>

    <Row className={styles.portfolio }>
      {/* left portfolio */}
      <Col xs={12} md={7}>
        <Card shadow >
          <Heading tag='h3' color={color.blueDark}  className='fs-3' title='Portfolio' />
          <Heading tag='p' title={name} className='fs-5 fw-normal' />
          <Heading tag='p' title={address.street} className='fs-5 fw-normal' />
          <Heading tag='p' title='RESEARCH INTERESTS' className='fs-4 fw-bold' />
          <Heading tag='p' title='Hispanic Literature, Latin American Literature, Peninsular Literature' className={styles. text +' fs-5 fw-normal'} />
          <Heading tag='p' title='EDUCATION' className='fs-4 fw-bold' />
          <Heading tag='p' title='Ph.D. in Spanish (US Hispanic Literature), 2018 – University of Houston.' className={styles. text +' fs-5 fw-normal'} />
          <Heading tag='p' title='Dissertation: Quixote Reborn: The Wanderer in US Hispanic Literature. Sancho Rodriguez, Chair.' className={styles. text +' fs-5 fw-normal'} />
          <Heading tag='p' title='M.A. in Spanish, June 2015 – University of Houston' className={styles. text +' fs-5 fw-normal'} />
          <Heading tag='p' title='B.A. in Spanish, June 2013 – University of Houston' className={styles. text +' fs-5 fw-normal'} />
        </Card>
      </Col>
      {/* right portfolio */}
      <Col xs={12} md={5}>
        <Card shadow>
          <Heading tag='h3' color={color.blueDark}  className='fs-3' title='About' />
          <Heading tag='p' className='fs-5 fw-normal' 
          title='Lose eyes get fat shew. Winter can indeed letter oppose way change tended now. So is improve my charmed picture exposed adapted demands. Received had end produced prepared diverted strictly off man branched.' />
          <Heading tag='p' className='fs-5 fw-normal pt-2' 
          title='Known ye money so large decay voice there to. Preserved be mr cordially incommode as an. He doors quick child an point at. Had share vexed front least style off why him.' />
        </Card>
      </Col>
    </Row>
  </div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params?.id}`);
    const person = await data.json();

    return {
      props: {
        person,
      },
    };
  } catch {
    context.res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default memo(index);

