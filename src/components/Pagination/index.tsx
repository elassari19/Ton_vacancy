import { BtnPrimary } from 'components';
import React, { FC } from 'react';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
  length: number;
  active: number;
  setActive: (item: number) => void;
}

const index: FC<Props> = ({ className, id, length, active, setActive}) => {

  let page = [];
  for (let number = 1; number <= length; number++) {
    page.push(
      number < 2 || number > length - 1 || (number > active - 2 && number < active + 2)
      ?<div 
        key={number} 
        onClick={()=>setActive(number)} 
        className={number == active ? styles.active : '' }
      >
        {number}
      </div>
      :number == active -2 || number == active + 2
      ?<div><div key={number} className={styles.dots}>...</div></div>
      :null,
    );
  }

  const previous = () => {
    setActive(active<=1?1:active-1)
  }

  const next = () => {
    setActive(active>=length?length:active+1)
  }
return <div className={styles.container + ` ${className}`} id={id}>
    <div onClick={previous} className={ active==1 ? styles.disabel : '' }><span>Previous</span></div>
    {
      page.map((item)=><>{item}</>)
    }
    <div onClick={next}className={ active==length ? styles.disabel : '' }><span>Next</span></div>
  </div>;
};

export default index;