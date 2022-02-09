import { Tips } from 'components';
import React, { FC } from 'react';
import styles from './styles.module.scss'

interface Props {
  className?: string;
  id?: string;
}

const index: FC<Props> = ({ className, id}) => {
  return <div className={styles.container + ` ${className}`} id={id}>
    <h4>Employment type</h4>

    <label htmlFor="fullEmployment">
      <input type="checkbox" id="fullEmployment" className="form-check-input outline-0" />
      <span className={styles.type}>Full employment</span>
      <Tips title='129.54' className={styles.tips} />
    </label>

    <label htmlFor="underemployment">
      <input type="checkbox" id="underemployment" className="form-check-input outline-0" />
      <span className={styles.type}>Underemployment</span>
      <Tips title='129.54' className={styles.tips} />
    </label>

    <label htmlFor="remoteWork">
      <input type="checkbox" id="remoteWork" className="form-check-input outline-0" />
      <span className={styles.type}>Remote work</span>
      <Tips title='129.54' className={styles.tips} />
    </label>

    <label htmlFor="projectWork">
      <input type="checkbox" id="projectWork" className="form-check-input outline-0" />
      <span className={styles.type}>Project work</span>
      <Tips title='129.54' className={styles.tips} />
    </label>
  </div>;
};

export default index;