import type { NextPage } from 'next'
import Head from 'next/head'
import { TipsCard, BtnPrimary, Tips } from '../components'
import { Section } from '../layout'
import {picture1, suitCase, tip01, tip02, tip03, tip04, personsWhite, picture2} from '../../public'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import { Col } from 'react-bootstrap'
import { memo } from 'react'
import { useRouter } from 'next/router'

const index: NextPage = () => {

  const route = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>TON_vacancy</title>
        <meta name="description" content="TON work allows you to find the most effective and top employees from all over the world" />
        <link rel="icon" type='image/png' sizes="32x32" href='../../public/logo.png' />
      </Head>

      <main className={styles.main}>

        {/* Professional applicants in various fields */}
        <Section>
          <TipsCard
            tag='h1'
            size='lg'
            title='Professional applicants in various fields'
            content='TON work allows you to find the most effective and top employees from all over the world'
          >
              <BtnPrimary blueDark title='I am employer' inIcon={suitCase} style={{width: '45%', padding: '12px'}} onClick={()=>route.push('/workers')} />
              <BtnPrimary greenDark title='I am applicant' inIcon={personsWhite} style={{width: '45%', padding: '12px'}} onClick={()=>route.push('/companies')} />
          </TipsCard>

            <Image src={picture1} />
        </Section>

        {/* How to find really a good job? */}
          <Col md={6} sm={12}>
            <Tips title='TIPS' style={{height: 35, width: 114}} />
            <TipsCard
              tag='h2'
              size='md'
              title='How to find really a good job? '
              content='TON work allows you to find the most effective and top employees from all over the world'
            />
          </Col>

        {/* images */}
        <Section>
          <Image src={tip01} />
          <Image src={tip02} />
          <Image src={tip03} />
          <Image src={tip04} />
        </Section>

        {/* How to find really a good job?  */}
        <Section style={{background: '#0001'}}>
          <Image src={picture2} />
          <div>
            <Tips title='TIPS' style={{height: 35, width: 114}} />
            <TipsCard
              tag='h2'
              size='md'
              title='How to find really a good job?'
              content='Pleased him another was settled for. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire. Stanhill on we if vicinity material in. Saw him smallest you provided ecstatic supplied.
              <br/>
              Garret wanted expect remain as mr. Covered parlors concern we express in visited to do. Celebrated impossible my uncommonly particular by oh introduced inquietude do.'
            />
          </div>
        </Section>
      </main>

    </div>
  )
}

export default memo(index);