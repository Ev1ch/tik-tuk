import React, { useEffect } from 'react';
import { ITikTuk } from 'types';
import { TikTuksPage } from 'components';
import { useAppDispatch } from 'store';
import { useTikTuksSelector } from './logic';
import * as actions from './logic/actions';

const TikTuksContainer = () => {
  const tiktuks = useTikTuksSelector((state) => state.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getTikTuks());
  }, []);

  return <TikTuksPage tiktuks={tiktuks} />;
};

export default TikTuksContainer;
