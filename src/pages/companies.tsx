import { Companies, Filter, InputCostum, Sort, Tips } from 'components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { FC, FormEvent, useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { search } from '../../public';
import styles from '../styles/companies.module.scss';

const item = ['','','','','','','','','','',''];

const index: FC = () => {

  const route = useRouter()
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

    <Row className='my-3'>
      <Col xs={{offset: 1, span: 10}} md={{offset: 0, span: 12}} lg={9}>
        <Row>

          {/* search input */}
          <Col sm={8} xs={12}>
            <InputCostum inIcon={search} placeholder='Search' value={text} onChange={handleChange} />
          </Col>

          {/* sort results */}
          <Col sm={4} xs={12}>
            <Sort />
          </Col>
        </Row>

        {/* companies info */}
        <Row className='mt-2'>
            {
              item.map((item,idx)=><Col xs={12} key={idx}><Companies onClick={()=>route.push(`/companies/${idx}`)} /></Col>)
            }
        </Row>
      </Col>

      {/* filter redult */}
      <Col sm={12} md={6} lg={3} className={styles.filter}>
        <Filter />
      </Col>

    </Row>

  </div>;
};

export default index;