import React from 'react';
import { Spinner } from 'components';
import styles from './loader.module.scss';

const Loader = function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.container}>
        <Spinner />
      </div>
    </div>
  );
};

export default Loader;
