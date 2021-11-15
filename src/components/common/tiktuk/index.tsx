import React from 'react';
import { ITikTuk } from 'types';
import Information from './information';
import Panel from './information';
import Video from './video';
import styles from './tiktuk.module.scss';

interface IVideoProps {
  tiktuk: ITikTuk;
  className?: string;
}

const TikTuk = ({ tiktuk }: IVideoProps) => {
  return (
    <div className={styles.tiktuk}>
      <Information
        author={tiktuk.authorMeta}
        description={{ text: tiktuk.text, hashtags: tiktuk.hashtags }}
        music={tiktuk.musicMeta}
      />
      <Video video={tiktuk.videoUrl} />
    </div>
  );
};

export default TikTuk;
