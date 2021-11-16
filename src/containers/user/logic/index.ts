import { createReducer } from '@reduxjs/toolkit';
import { TSelector } from 'helpers';
import { useAppSelector } from 'store';
import { initialState, IUserState } from './state';
import * as actionsTypes from './actions-types';
import * as actions from './actions';

const reducer = createReducer<IUserState>(initialState, {
  [actionsTypes.SET_USER]: (state, { payload: { user } }: ReturnType<typeof actions.setUser>) => {
    return {
      ...state,
      user: {
        ...state.user,
        item: user,
      },
    };
  },
  [actionsTypes.SET_USER_FEED]: (
    state,
    { payload: { feed } }: ReturnType<typeof actions.setUserFeed>,
  ) => {
    return {
      ...state,
      feed: {
        ...state.feed,
        items: feed,
      },
    };
  },
});

export const useUserSelector = (selector: TSelector<IUserState>) =>
  useAppSelector((state) => selector(state.user));

export default reducer;
