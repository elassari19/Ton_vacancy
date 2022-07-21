import React, { FC, ReactNode } from 'react';
import { Col } from 'react-bootstrap';
import { ColSpec } from 'react-bootstrap/esm/Col';
import styles from './styles.module.scss'

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  shadow?: boolean;
  xs?: ColSpec;
  sm?: ColSpec;
  md?: ColSpec;
  lg?: ColSpec;
}

const index: FC<Props> = ({children, className, shadow, id, xs, sm, md, lg}) => {
  return <Col
    id={id} xs={xs} sm={sm} md={md} lg={lg}
    className={styles.container + ` ${shadow ? styles.shadow: null} ${className}`}
  >
    {children}
  </Col>;
};

export default index;