import React, { useEffect } from 'react';
import { Loader } from 'components';
import { ITikTuk } from 'types/tiktuk';
import { TrendingPage } from 'components';
import { useAppDispatch } from 'store';
import { useTikTuksSelector } from './logic';
import * as actions from './logic/actions';

const TrendingContainer = () => {
  const { items: tiktuks, isLoading } = useTikTuksSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getTrending({ toSet: true }));
  }, []);

  return !isLoading && tiktuks ? <TrendingPage tiktuks={tiktuks} /> : <Loader />;
};

export default TrendingContainer;
