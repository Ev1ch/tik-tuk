import React from 'react';
import { IUserInformation, IUserStats } from 'types';
import { Avatar } from 'components';
import styles from './information.module.scss';
import { convertToMinifiedNumber } from 'helpers';
import clsx from 'clsx';

interface IInformationProps {
  user: IUserInformation;
  stats: IUserStats;
  className?: string;
}

const Information = ({ user, stats, className }: IInformationProps) => {
  const followingCaption = convertToMinifiedNumber(stats.followingCount);
  const followersCaption = convertToMinifiedNumber(stats.followerCount);
  const likesCaption = convertToMinifiedNumber(stats.diggCount);

  return (
    <div className={clsx(styles.information, className)}>
      <div className={styles.user}>
        <Avatar image={user.avatarMedium} className={styles.avatar} />
        <div>
          <p className={styles.nick}>{user.uniqueId}</p>
          <p className={styles.name}>{user.nickname}</p>
        </div>
      </div>
      <div className={styles.stats}>
        <p>
          <strong>{followingCaption}</strong> following
        </p>
        <p>
          <strong>{followersCaption}</strong> followers
        </p>
        <p>
          <strong>{likesCaption}</strong> likes
        </p>
      </div>
    </div>
  );
};

export default Information;
