import React, { useEffect } from 'react';
import { ITikTuk } from 'types/tiktuk';
import { TrendingPage } from 'components';
import { useAppDispatch } from 'store';
import { useTikTuksSelector } from './logic';
import * as actions from './logic/actions';

const TrendingContainer = () => {
  const tiktuks = useTikTuksSelector((state) => state.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getTrending({ toSet: true }));
  }, []);

  return <TrendingPage tiktuks={tiktuks} />;
};

export default TrendingContainer;
