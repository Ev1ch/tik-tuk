import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router';
import { Logotype } from 'components';
import { Routes } from 'common';
import styles from './header.module.scss';

const Header = function Header() {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate(Routes.TRENDING);
  };

  return (
    <header className={styles.header}>
      <div
        className={clsx('container', styles.container)}
        onClick={onLogoClick}
        role="link"
        tabIndex={0}
      >
        <Logotype className={styles.logotype} />
      </div>
    </header>
  );
};

export default Header;
