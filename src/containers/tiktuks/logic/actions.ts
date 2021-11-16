import { createAction } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';

export const getTikTuks = createAction(actionsTypes.GET_TIKTUKS);
export const setTikTuks = createAction<actionsTypes.ISetTikTuksArgs>(actionsTypes.SET_TIKTUKS);
export const addTikTuks = createAction<actionsTypes.IAddTikTuksArgs>(actionsTypes.ADD_TIKTUKS);
export const setPage = createAction<actionsTypes.ISetPage>(actionsTypes.SET_PAGE);
