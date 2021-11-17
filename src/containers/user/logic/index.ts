import { createReducer } from '@reduxjs/toolkit';
import { TSelector } from 'helpers';
import { useAppSelector } from 'store';
import { initialState, IUserState } from './state';
import * as actionsTypes from './actions-types';
import * as actions from './actions';

const reducer = createReducer<IUserState>(initialState, {
  [actionsTypes.SET_USER]: (
    state,
    { payload: { information, feed } }: ReturnType<typeof actions.setUser>,
  ) => {
    return {
      ...state,
      information: {
        ...state.information,
        ...information,
      },
      feed: {
        ...state.feed,
        ...feed,
      },
    };
  },
  [actionsTypes.SET_LOADING]: (
    state,
    { payload: { isLoading } }: ReturnType<typeof actions.setLoading>,
  ) => {
    return {
      ...state,
      isLoading,
    };
  },
});

export const useUserSelector = (selector: TSelector<IUserState>) =>
  useAppSelector((state) => selector(state.user));

export default reducer;
