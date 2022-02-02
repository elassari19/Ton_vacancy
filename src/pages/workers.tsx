import React, { FormEvent, useState } from 'react';
import { Section } from '../layout';
import { InputCostum, Sort } from '../components';
import Head from 'next/head';
import styles from '../styles/Home.module.scss'
import { search } from '../../public';

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
    <div className={styles.main}>
      <Section>
        <InputCostum inIcon={search} placeholder='Search' value={text} onChange={handleChange} />
        <Sort />
      </Section>
    </div>
  </div>;
}

export default index;
