import { createReducer } from '@reduxjs/toolkit';
import { TSelector } from 'helpers';
import { useAppSelector } from 'store';
import { initialState, ITikTuksState } from './state';
import * as actionsTypes from './actions-types';
import * as actions from './actions';

const reducer = createReducer<ITikTuksState>(initialState, {
  [actionsTypes.SET_TIKTUKS]: (
    state,
    { payload: { tiktuks } }: ReturnType<typeof actions.setTikTuks>,
  ) => {
    return {
      ...state,
      items: tiktuks,
    };
  },
});

export const useTikTuksSelector = (selector: TSelector<ITikTuksState>) =>
  useAppSelector((state) => selector(state.tiktuks));

export default reducer;
