import React from 'react';
import clsx from 'clsx';
import { IHashtag } from 'types';
import styles from './hashtag.module.scss';

interface IHashtagProps {
  hashtag: IHashtag;
  className?: string;
}

const Hashtag = ({ hashtag, className }: IHashtagProps) => {
  return (
    <div className={clsx(styles.hashtag, className)}>
      <span>{hashtag.name}</span>
    </div>
  );
};

export default Hashtag;
