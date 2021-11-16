import React from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ITikTuk } from 'types';
import { convertToMinifiedNumber } from 'helpers';
import styles from './minified-tiktuk.module.scss';

interface IMinifiedTikTuk {
  tiktuk: ITikTuk;
}

const MinifiedTikTuk = ({ tiktuk }: IMinifiedTikTuk) => {
  const viewsCaption = convertToMinifiedNumber(tiktuk.playCount);

  return (
    <div className={styles.minifiedTikTuk}>
      <p className={styles.views}>
        <FontAwesomeIcon icon={faPlay} className={styles.icon} />
        {viewsCaption}
      </p>
      <div className={styles.overlay}></div>
      <video src={tiktuk.videoUrl} className={styles.video}></video>
    </div>
  );
};

export default MinifiedTikTuk;
