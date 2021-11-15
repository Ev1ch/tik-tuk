import React from 'react';
import { Avatar, Hashtag } from 'components';
import { IAuthorMeta, IHashtag, IMusicMeta } from 'types';
import styles from './information.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

interface IInfromationProps {
  description: {
    text: string;
    hashtags: IHashtag[];
  };
  author: IAuthorMeta;
  music: IMusicMeta;
}

const Information = ({ description, author, music }: IInfromationProps) => {
  const HASHTAGS_LIMIT = 5;
  const DESCRIPTION_LIMIT = 90;

  return (
    <div className={styles.information}>
      <Avatar image={author.avatar} className={styles.authorAvatar} />
      <div>
        <div className={styles.author}>
          <p className={styles.nick}>{author.nickName}</p>
          <p className={styles.name}>{author.name}</p>
        </div>
        <div className={styles.description}>
          <p className={styles.text}>
            {description.text.slice(0, DESCRIPTION_LIMIT)}
            {DESCRIPTION_LIMIT < description.text.length && '...'}
          </p>
          <p className={styles.hashtags}>
            {description.hashtags.slice(0, HASHTAGS_LIMIT).map((hashtag) => (
              <Hashtag hashtag={hashtag} key={hashtag.id} />
            ))}
            {HASHTAGS_LIMIT < description.hashtags.length && '...'}
          </p>
        </div>
        <div className={styles.music}>
          <p className={styles.description}>
            <FontAwesomeIcon icon={faCompactDisc} className={styles.icon} />
            <span className={styles.band}>{music.musicAuthor}</span> -{' '}
            <span className={styles.name}>{music.musicName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
