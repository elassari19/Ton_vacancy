import { IValue } from 'components/Filter';
import React, { FC } from 'react';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
  value: IValue;
  setValue: (ev: IValue)=>void;
}

const index: FC<Props> = ({ className, id, setValue, value}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    <h5>Age</h5>
    <div className={styles.rangeSlider}>
      <input min="18" max="50" step="1" type="range" onChange={(e)=>setValue({...value, min: e.currentTarget.value})} />
      <input min="18" max="100" step="1" type="range" onChange={(e)=>setValue({...value, max: e.currentTarget.value})}/>
    </div>

    <div className={styles.rangeValue}>
      <div>
        <label>
          From
          <div>
            <input type='number' value={value.min} min='18' max='50' onChange={(e)=>setValue({...value, min: e.currentTarget.value})} />
            Years
          </div>
        </label>
      </div>

      <div>
        <label>
          To
          <div>
            <input type='number' value={value.max} min='18' max='100' onChange={(e)=>setValue({...value, max: e.currentTarget.value})}/>
            Years
          </div>
        </label>
      </div>

    </div>

  </div>;
};

export default index;