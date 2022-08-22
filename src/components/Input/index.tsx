import React, { CSSProperties, FC, FormEvent } from "react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";
import styles from "./styles.module.scss";

interface Props {
  label: Path<any>;
  title?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  className?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  onChange?: (ev: FormEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  value?: string | number;
}

const index: FC<Props> = ({
  label,
  register,
  error,
  className,
  id,
  placeholder,
  type,
  value,
  onChange,
  title,
  style,
}) => {
  const string = title ? title : label;

  return (
    <div className={styles.container + ` ${className} my-3`} id={id}>
      <label htmlFor={label} className="px-2 my-1">
        {string.charAt(0).toUpperCase() + string.slice(1)}
      </label>

      <div className={error?.message && styles.error}>
        <input
          {...register(label)}
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          style={style}
        />
      </div>

      {error?.message && <span>{error.message}</span>}
    </div>
  );
};

export default index;
