import React, { MouseEvent } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './button.module.scss';

interface IButtonProps {
  icon?: IconProp;
  text?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = function Button({ icon, text, className, onClick }: IButtonProps) {
  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={clsx(styles.button, className)} onClick={onClickHandler} type="button">
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </button>
  );
};

export default Button;
