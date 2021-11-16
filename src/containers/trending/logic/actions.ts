import { createAction } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';

export const getTrending = createAction<actionsTypes.IGetTrandingArgs>(actionsTypes.GET_TRENDING);
export const setTrending = createAction<actionsTypes.ISetTrendingArgs>(actionsTypes.SET_TRENDING);
export const addTrending = createAction<actionsTypes.IAddTrendingArgs>(actionsTypes.ADD_TRENDING);
export const setPage = createAction<actionsTypes.ISetPage>(actionsTypes.SET_PAGE);
