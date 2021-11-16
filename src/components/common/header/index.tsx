import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router';
import { Logotype } from 'components';
import styles from './header.module.scss';
import { Routes } from 'common';

const Header = () => {
  const history = useHistory();

  const onLogoClick = () => {
    history.push(Routes.TRENDING);
  };

  return (
    <header className={styles.header} onClick={onLogoClick}>
      <div className={clsx('container', styles.container)}>
        <Logotype className={styles.logotype} />
      </div>
    </header>
  );
};

export default Header;
