import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Loader, UserPage } from 'components';
import { useUserSelector } from './logic';
import { useAppDispatch } from 'store';
import * as actions from './logic/actions';

const UserContainer = () => {
  const dispatch = useAppDispatch();
  const { nick } = useParams<{ nick: string }>();
  const {
    information: { item: information },
    isLoading,
    feed: { items: feed },
  } = useUserSelector((state) => state);

  useEffect(() => {
    dispatch(actions.getUser({ nick }));
  }, []);

  return !isLoading && information && feed ? (
    <UserPage information={information} feed={feed} />
  ) : (
    <Loader />
  );
};

export default UserContainer;
