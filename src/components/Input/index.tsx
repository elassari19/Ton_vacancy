import React, { CSSProperties, FC, FormEvent } from 'react';
import { FieldError, Path, UseFormRegister } from 'react-hook-form';
import { Iinfo } from 'types';
import styles from './styles.module.scss'

interface Props {
  label: Path<Iinfo>;
  title?: string;
  register: UseFormRegister<Iinfo>;
  error?: FieldError;
  className?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  onChange?: (ev: FormEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  value?: string | number;
}

const index: FC<Props> = ({ label, register, error, className, id, placeholder, type, value, onChange, title, style }) => (
  <div className={styles.container + ` ${className}`} id={id}>
    <label htmlFor={label}>

      {title}

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

    </label>
  </div>
);

export default index;