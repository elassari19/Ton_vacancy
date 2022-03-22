import BtnPrimary from 'components/BtnPrimary';
import InputCostum from 'components/InputCostum';
import React, { ChangeEvent, FC, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Plus, x } from '../../../public';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
  add: (name: string) => void;
  remove: (item: string) => void;
  items: string[];
}

const index: FC<Props> = ({ className, id, add, remove, items}) => {

  const [value, setValue] = useState<string>('')

  return <div className={styles.container + ` ${className}`} id={id}>
    <InputCostum
      endIcon={Plus} value={value} id='skills' placeholder='add skill' 
      onChange={(ev: ChangeEvent<HTMLInputElement>) => setValue(ev.target.value)}
      onClick={()=>{add(value); setValue('');}}
    />
    <Row>
      {
        items.map((item: string) => <BtnPrimary key={item} style={{width: 'auto', borderRadius: 8}} blueLight endIcon={x} title={item} onClick={()=>remove(item)} />)
      }
    </Row>
  </div>;
};

export default index;