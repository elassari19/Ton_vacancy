import React, { FC } from 'react';
import styles from './styles.module.scss'
import {AiOutlineCheck} from 'react-icons/ai'

interface Props {
  id?: string;
  haveExperience?: boolean;
}

const index: FC<Props> = ({ id, haveExperience}) => {
  return <div className={styles.container + ` ${haveExperience?styles.cryptoYes:styles.cryptoNo}`} id={id}>
     <div>
       {
         haveExperience
         ? <AiOutlineCheck color='#97CA3E' />
         : 'X'
       }
     </div>
        <div>
          <div>Crypto projects</div>
          <p>Have experience in crypto projects</p>
        </div>
  </div>;
};

export default index;