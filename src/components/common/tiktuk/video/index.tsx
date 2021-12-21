import React from 'react';
import styles from './video.module.scss';

interface IVideoProps {
  video: string;
}

const Video = function Video({ video }: IVideoProps) {
  return (
    <div className={styles.video}>
      <video src={video} className={styles.content} controls>
        <track kind="captions" />
      </video>
    </div>
  );
};

export default Video;
