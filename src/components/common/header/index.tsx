import React from 'react';
import clsx from 'clsx';
import { Logotype } from 'components';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.container)}>
        <Logotype />
      </div>
    </header>
  );
};

export default Header;
