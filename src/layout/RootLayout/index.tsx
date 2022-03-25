import React, { FC, memo, ReactNode } from 'react';
import { Effect, Footer, Header } from '../../components';
import Work from '../../../public/Work.svg';
import { Col } from 'react-bootstrap';

interface Props {
  children: ReactNode;
}

const index: FC<Props> = ({children}) => {
  return <div>
    <Effect size={70} rotate={0} top={100} left={20} icon={Work} />
    <Effect size={100} rotate={-45} top={300} left={-30} icon={Work} />

      <Header />
      <Col xs={{ span: 12}} md={{offset: 1, span: 10}} >
        {children}
      </Col>
      <Footer/>
  </div>;
};

export default memo(index);