import Image from "next/image";
import React, { CSSProperties, FC, ReactNode } from "react";
import { loding, x } from "../../../public";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  style?: CSSProperties;
  onclick?: () => void;
}

const index: FC<Props> = ({ className, style, onclick }) => {
  return (
    <div>
      <div className={styles.images}>
        <Image src={loding} width={60} height={60} alt="Image" />
        <Image src={x} width={22} height={22} alt="Image" onClick={onclick} />
      </div>
      <div className={styles.text}>
        <p>
          Once a vacancy has been added, it is displayed on the “Your vacancies”
          page
        </p>
        <span>Before publication, each ad is moderated.</span>
      </div>
    </div>
  );
};

export default index;
