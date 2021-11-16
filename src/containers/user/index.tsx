import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { UserPage } from 'components';
import { useUserSelector } from './logic';
import { useAppDispatch } from 'store';
import * as actions from './logic/actions';
import { ITikTuk, IUser } from 'types';

const UserContainer = () => {
  const dispatch = useAppDispatch();
  const { nick } = useParams<{ nick: string }>();
  const user: IUser | null = useUserSelector((state) => state.user.item);
  const feed: ITikTuk[] = useUserSelector((state) => state.feed.items);

  useEffect(() => {
    dispatch(actions.getUser({ nick }));
    dispatch(actions.getUserFeed({ nick }));
  }, []);

  return user ? <UserPage user={user} feed={feed} /> : <h1>Loading</h1>;
};

export default UserContainer;
