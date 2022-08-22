import React, { CSSProperties, FC, memo } from "react";
import styles from "./styles.module.scss";
import { swap } from "../../../public";
import Image from "next/image";

interface Props {
  className?: string;
  id?: string;
  placeholder?: string;
  name: string;
  values: string[];
  value: string;
  endIcon?: string;
  inIcon?: string;
  style?: CSSProperties;
  onClick?: (e: any) => void;
}

const index: FC<Props> = ({
  className,
  id,
  values,
  value,
  name,
  style,
  placeholder,
  inIcon,
  endIcon,
  onClick,
}) => {
  return (
    <div className={styles.container + ` ${className}`} id={id} style={style}>
      {inIcon && <Image src={inIcon} alt="Image" />}
      <select
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onClick}
      >
        {values?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {endIcon && <Image src={endIcon} alt="Image" />}
    </div>
  );
};

export default memo(index);
