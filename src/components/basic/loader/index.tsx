import React from 'react';
import clsx from 'clsx';
import styles from './loader.module.scss';

interface ILoaderProps {
  className?: string;
}

const Loader = ({ className }: ILoaderProps) => {
  return (
    <div className={clsx(styles.loader, className)}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
