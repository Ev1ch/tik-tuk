import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { convertToMinifiedNumber } from 'helpers';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import styles from './panel.module.scss';

interface IPanelProps {
  likes: number;
  comments: number;
  shares: number;
}

const Panel = function Panel({ likes, comments, shares }: IPanelProps) {
  const likesCaption = convertToMinifiedNumber(likes);
  const commentsCaption = convertToMinifiedNumber(comments);
  const sharesCaption = convertToMinifiedNumber(shares);

  return (
    <div className={styles.panel}>
      <button className={styles.button} type="button">
        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        {likesCaption}
      </button>
      <button className={styles.button} type="button">
        <FontAwesomeIcon icon={faComment} className={styles.icon} />
        {commentsCaption}
      </button>
      <button className={styles.button} type="button">
        <FontAwesomeIcon icon={faShare} className={styles.icon} />
        {sharesCaption}
      </button>
    </div>
  );
};

export default Panel;
