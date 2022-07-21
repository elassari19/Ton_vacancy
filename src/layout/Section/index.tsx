import React, { CSSProperties, FC, memo, ReactNode } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss'

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  height?: number;
  style?: CSSProperties;
}

const index: FC<Props> = ({children, className, id, height, style}) => {

  const child = children?.length;

return <div className={styles.container + ` ${className}`} id={id} style={{...style}}>
    <Col style={{height: height}}>
      <Row>
        {
          children?.map((item: ReactNode, idx: number)=>(
            <Col sm={12} md={(12/child)*2} lg={12/child} key={idx} style={{padding: '10px 5px'}} className={styles.center}>{item}</Col>
          ))
        }
      </Row>
    </Col>
  </div>;
};

export default memo(index);