import React, { FC, memo } from 'react';
import { BsArrowRightSquare} from 'react-icons/bs'
import { MdClear} from 'react-icons/md'
import styles from './styles.module.scss'

interface Props {
  onClick: ()=>void;
}

const index: FC<Props> = ({onClick}) => {
  return (
    <>

      <div id='search' className={styles.container}>
        <MdClear size={25} onClick={onClick} color='#3B86C6' />
        <input placeholder='Search' />
        <BsArrowRightSquare size={30} color='#3B86C6' />
      </div>
    </>
  );
}

export default memo(index);