import React from 'react';
import { useHistory } from 'react-router';
import { Avatar, Hashtag } from 'components';
import { IAuthorMeta, IHashtag, IMusicMeta } from 'types/tiktuk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import styles from './information.module.scss';
import { Routes } from 'common';

interface IInfromationProps {
  description: {
    text: string;
    hashtags: IHashtag[];
  };
  author: IAuthorMeta;
  music: IMusicMeta;
}

const Information = ({ description, author, music }: IInfromationProps) => {
  const history = useHistory();

  const onAuthorClick = () => {
    history.push(Routes.USERS(author.name));
  };

  return (
    <div className={styles.information}>
      <Avatar image={author.avatar} className={styles.authorAvatar} onClick={onAuthorClick} />
      <div>
        <div className={styles.author}>
          <p className={styles.nick} onClick={onAuthorClick}>
            {author.nickName}
          </p>
          <p className={styles.name} onClick={onAuthorClick}>
            {author.name}
          </p>
          {author.signature && <FontAwesomeIcon icon={faCheck} />}
        </div>
        <div className={styles.description}>
          <p className={styles.text}>{description.text}</p>
          <div className={styles.hashtags}>
            {description.hashtags.map((hashtag) => (
              <Hashtag hashtag={hashtag} key={hashtag.id} />
            ))}
          </div>
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
