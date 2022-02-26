import React, { FC, ReactNode } from 'react';
import { FieldError, Path, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import { Iinfo } from 'types';
import styles from './styles.module.scss'

interface Props {
  label: Path<Iinfo>;
  register: UseFormRegister<Iinfo>;
  error?: FieldError;
  className?: string;
  id?: string;
  placeholder?: string;
  type?: string;
}

const index: FC<Props> = ({ label, register, error, className, id, placeholder, type }) => (
  <div className={styles.container + ` ${className}`} id={id}>
    <label htmlFor={label}>

      {label}

      <div className={error?.message && styles.error}>
        <input {...register(label)} placeholder={placeholder} type={type} />
      </div>

      {error?.message && <span>{error.message}</span>}

    </label>
  </div>
);

export default index;