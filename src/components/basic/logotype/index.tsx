import React from 'react';
import clsx from 'clsx';
import styles from './logotype.module.scss';

interface ILogotypeProps {
  className?: string;
}

const Logotype = function Logotype({ className }: ILogotypeProps) {
  return <p className={clsx(styles.logotype, className)}>Tik Tuk</p>;
};

export default Logotype;
