import React from 'react';
import styles from './video.module.scss';

interface IVideoProps {
  video: string;
}

const Video = ({ video }: IVideoProps) => {
  return (
    <div className={styles.video}>
      <video src={video} className={styles.content} controls></video>
    </div>
  );
};

export default Video;
