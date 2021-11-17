import React from 'react';
import { ITikTuk } from 'types/tiktuk';
import { IUser } from 'types/user';
import { IFeed, IFeedTikTuk } from 'types/feed';
import { Header, MinifiedTikTuk } from 'components';
import Information from './information';
import styles from './user.module.scss';

interface IUserProps {
  user: IUser;
  feed: IFeedTikTuk[];
}

const UserPage = ({ user, feed }: IUserProps) => {
  return (
    <div className="user-page">
      <Header />
      <main className={styles.main}>
        <div className="container">
          <Information user={user.user} stats={user.stats} className={styles.information} />
          <div className={styles.feed}>
            {feed.map((tiktuk) => (
              <MinifiedTikTuk tiktuk={tiktuk} key={tiktuk.id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserPage;
