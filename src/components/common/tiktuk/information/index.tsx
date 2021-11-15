import React from 'react';
import { Avatar, Hashtag } from 'components';
import { IAuthorMeta, IHashtag, IMusicMeta } from 'types';
import styles from './information.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCompactDisc } from '@fortawesome/free-solid-svg-icons';

interface IInfromationProps {
  description: {
    text: string;
    hashtags: IHashtag[];
  };
  author: IAuthorMeta;
  music: IMusicMeta;
}

const Information = ({ description, author, music }: IInfromationProps) => {
  return (
    <div className={styles.information}>
      <Avatar image={author.avatar} className={styles.authorAvatar} />
      <div>
        <div className={styles.author}>
          <p className={styles.nick}>{author.nickName}</p>
          <p className={styles.name}>{author.name}</p>
          {author.signature && <FontAwesomeIcon icon={faCheck} />}
        </div>
        <div className={styles.description}>
          <p className={styles.text}>{description.text}</p>
          <p className={styles.hashtags}>
            {description.hashtags.map((hashtag) => (
              <Hashtag hashtag={hashtag} key={hashtag.id} />
            ))}
          </p>
        </div>
        <div className={styles.music}>
          <p className={styles.description}>
            <FontAwesomeIcon icon={faCompactDisc} className={styles.icon} />
            {`${music.musicAuthor} - ${music.musicName}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
