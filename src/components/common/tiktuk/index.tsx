import React from 'react';
import { ITikTuk } from 'types';
import Information from './information';
import Video from './video';
import Panel from './panel';
import styles from './tiktuk.module.scss';

interface IVideoProps {
  tiktuk: ITikTuk;
  className?: string;
}

const TikTuk = ({ tiktuk }: IVideoProps) => {
  return (
    <div className={styles.tiktuk}>
      <div className={styles.information}>
        <Information
          author={tiktuk.authorMeta}
          description={{ text: tiktuk.text, hashtags: tiktuk.hashtags }}
          music={tiktuk.musicMeta}
        />
      </div>
      <div className={styles.video}>
        <Video video={tiktuk.videoUrl} />
      </div>
      <div className={styles.panel}>
        <Panel likes={tiktuk.diggCount} comments={tiktuk.commentCount} shares={tiktuk.shareCount} />
      </div>
    </div>
  );
};

export default TikTuk;
