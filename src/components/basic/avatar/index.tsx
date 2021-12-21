import React, { MouseEvent } from 'react';
import clsx from 'clsx';
import styles from './avatar.module.scss';

interface IAvatarProps {
  image: string;
  alt?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Avatar = function Avatar({ image, alt, className, onClick }: IAvatarProps) {
  const onClickHandler = (event: MouseEvent<HTMLElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div className={clsx(styles.avatar, className)} onClick={onClickHandler} role="img">
      <img src={image} alt={alt} className={styles.image} />
    </div>
  );
};

export default Avatar;
