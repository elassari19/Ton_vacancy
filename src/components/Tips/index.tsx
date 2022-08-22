import React, { CSSProperties, FC, memo, ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  id?: string;
  bg?: string;
  radius?: number;
  style?: CSSProperties;
  title: number | string;
}

const index: FC<Props> = ({
  title = "TIPS",
  className,
  id,
  style,
  radius,
  bg,
}) => {
  return (
    <div
      className={styles.container + ` ${className}`}
      id={id}
      style={{ ...style, backgroundColor: bg, borderRadius: radius }}
    >
      {title}
    </div>
  );
};

export default memo(index);
