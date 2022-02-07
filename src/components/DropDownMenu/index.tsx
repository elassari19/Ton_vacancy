import { useRouter } from 'next/router';
import React, { FC, memo } from 'react';
import { SubstitutY } from '../../Animations';
import { Container } from '../../layout';
import styles from './styles.module.scss'

interface Props {
  setDropDownMenu: (item: boolean)=>void
}

const items = ['itme','itme','itme','itme','itme','itme']

const index: FC<Props> = ({setDropDownMenu}) => {

  const router = useRouter()
  const handleClickItem = (path: string) => {
    SubstitutY('drop', 'id', 0.1, 'block');
    router.push(path)
    setDropDownMenu(false)
  };

  return <Container id='drop' small className={styles.container}>
    
    {
      items.map((item, idx)=>(
        <div
          key={idx}
          className={styles.dropMenu}
          onClick={()=>handleClickItem(`/${item}`)}
        >
          {item}
        </div>
      ))
    }
    <div id='id'></div>

  </Container>;
};

export default memo(index);