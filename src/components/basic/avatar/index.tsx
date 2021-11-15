import React from 'react';
import clsx from 'clsx';
import styles from './avatar.module.scss';

interface IAvatar {
  image: string;
  alt?: string;
  className?: string;
}

const Avatar = ({ image, alt, className }: IAvatar) => {
  return (
    <div className={clsx(styles.avatar, className)}>
      <img src={image} alt={alt} className={styles.image} />
    </div>
  );
};

export default Avatar;
