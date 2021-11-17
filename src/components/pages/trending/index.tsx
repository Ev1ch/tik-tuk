import React from 'react';
import { Header, TikTuk } from 'components';
import { ITikTuk } from 'types/tiktuk';
import styles from './trending.module.scss';

interface ITrendingPageProps {
  tiktuks: ITikTuk[];
}

const TrendingPage = ({ tiktuks }: ITrendingPageProps) => {
  return (
    <div className="trending-page">
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

export default TrendingPage;
