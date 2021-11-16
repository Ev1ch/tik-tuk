import React from 'react';
import { Header, TikTuk } from 'components';
import { ITikTuk } from 'types';
import styles from './tiktuks.module.scss';

interface ITikTuksPageProps {
  tiktuks: ITikTuk[];
}

const TikTuksPage = ({ tiktuks }: ITikTuksPageProps) => {
  return (
    <div className="tiktuks-page">
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.tiktuks}>
            {tiktuks.map((tiktuk: ITikTuk) => (
              <TikTuk tiktuk={tiktuk} key={tiktuk.id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TikTuksPage;
