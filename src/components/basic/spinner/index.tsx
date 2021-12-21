import React from 'react';
import clsx from 'clsx';
import styles from './spinner.module.scss';

interface ISpinnerProps {
  className?: string;
}

const Spinner = function Spinner({ className }: ISpinnerProps) {
  return (
    <div className={clsx(styles.spinner, className)}>
      <div />
      <div />
    </div>
  );
};

export default Spinner;
