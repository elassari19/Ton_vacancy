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
}

const index: FC<Props> = ({ label, register, error, className, id }) => (
  <div className={styles.container + ` ${className}`} id={id}>
    <label htmlFor={label}>

      {label}

      <div>
        <input {...register(label)} />
      </div>

      {error?.message && <span>{error.message}</span>}

    </label>
  </div>
);

export default index;