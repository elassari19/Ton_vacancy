import { Tips } from 'components';
import { Card } from 'layout';
import Image, { StaticImport } from 'next/image';
import Link from 'next/link';
import React, { FC, memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { color } from 'theme';
import { browser, market, persons, profile } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
  onClick?: () => void;
  desc ?: string;
  link ?: string;
  employees ?: string;
  onMarket ?: string;
  image ?: string | StaticImport;
  title ?: string;
  shadow ?: boolean;
}

const index: FC<Props> = ({ className, id, onClick, desc, link, employees, onMarket, image, title, shadow}) => {
  return <Row className={shadow ? styles.boxShadow : styles.container } onClick={onClick} id={id}>

    {
      image &&
      <Col xs={{offset: 1, span:8}} md={{offset: 0, span: 3}}>
        {
          image && <Image src={image} alt='profile' />
        }
          {
            link 
            && <Row>
                <Link href={'google.com'}>
                <a className={styles.anchor}>
                  <Image src={browser}/>
                  <span>Visit website</span>
                </a>
              </Link>
            </Row>
          }
      </Col>
    }

    <Col xs={12} md={image ? 9 : 12} className={className}>
      
      <Row className={styles.title}>
        <Col xs={6} lg={4}><h3>{title}</h3></Col>
        <Col xs={6} lg={4}><Tips title='10 000 open vacany' className={styles.tips} /></Col>
      </Row>
      
      <Row>
        <p className='text-secondary'>{desc}</p>
      </Row>
      
      <Row className={styles.flexend}>
        <div className={styles.flex}>
          <Image src={persons} alt='persons' />
          <p className='text-bolder'>more than {employees} employees</p>
        </div>
        <div className={styles.flex}>
          <Image src={market} alt='market' />
          <p className='text-bolder'>{onMarket} years on the market</p>
        </div>
      </Row>

    </Col>
  </Row>;
};

export default memo(index);