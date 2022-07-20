/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./styles.module.scss";
import React, { FC, memo, ReactNode } from "react";
import { Effect } from "../../components";
import Work from "../../../public/Work.svg";
import { Col } from "react-bootstrap";
import Header from "components/header";
import Footer from "components/footer";

interface Props {
  children: ReactNode;
}

const index: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Effect size={70} rotate={0} top={100} left={20} icon={Work} />
      <Effect size={100} rotate={-45} top={300} left={-30} icon={Work} />

      <Header />
      <Col
        xs={{ span: 12 }}
        md={{ offset: 1, span: 10 }}
        className={styles.body}
      >
        {children}
      </Col>
      <Footer />
    </div>
  );
};

export default memo(index);
