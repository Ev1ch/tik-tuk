import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Loader, UserPage } from 'components';
import { useAppDispatch } from 'store';
import { useUserSelector } from './logic';
import * as actions from './logic/actions';

const UserContainer = function UserContainer() {
  const dispatch = useAppDispatch();
  const { nick } = useParams<{ nick: string }>();
  const {
    information: { item: information },
    isLoading,
    feed: { items: feed },
  } = useUserSelector((state) => state);

  useEffect(() => {
    if (nick) {
      dispatch(actions.getUser({ nick }));
    }
  }, []);

  return !isLoading && information && feed ? (
    <UserPage information={information} feed={feed} />
  ) : (
    <Loader />
  );
};

export default UserContainer;
