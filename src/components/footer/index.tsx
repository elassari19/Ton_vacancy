import Image from 'next/image';
import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BtnPrimary } from '..';
import { Logo, telegram, vector } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;}

const index: FC<Props> = ({ className, id}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    <Col sm={12} md={{offset: 1, span: 10}}>
      <Row>
        <Col sm={{offset: 1, span: 10}} md={7}>
          <Row>

            <Col><Image src={Logo} /></Col>

            <Col sm={12} md={4}>
              <p className={styles.title}>Applicant</p>
              <div>
                 <Image src={vector} />
                 <span>To find a job</span>
              </div>
              <div>
                 <Image src={vector} />
                 <span>Submit your CV</span>
              </div>
            </Col>

            <Col>
              <p className={styles.title}>Employer</p>
              <div>
                 <Image src={vector} />
                 <span>Добавить вакансию</span>
              </div>
              <div>
                 <Image src={vector} />
                 <span>Поиск резюме</span>
              </div>
            </Col>

          </Row>
        </Col>

        <Col className={styles.center} style={{paddingTop: 15}} >
          <Image src={telegram}/>
          <span className={styles.telegram}>Visit Telegram channel</span>
        </Col>

      </Row>

        <hr/>

      <Row>
        <Col>
          <span>All rights reserved ®</span>
        </Col>
        <Col md={{ span: 2}}>
          <BtnPrimary title='Privacy Policy' />
        </Col>
        <Col md={{span: 2}}>
          <BtnPrimary title='Terms of service' />
        </Col>
      </Row>
    </Col>
  </div>;
};

export default index;
