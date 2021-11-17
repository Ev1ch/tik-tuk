import { createAction } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';

export const getUser = createAction<actionsTypes.IGetUserArgs>(actionsTypes.GET_USER);
export const setUser = createAction<actionsTypes.ISetUserArgs>(actionsTypes.SET_USER);
export const setLoading = createAction<actionsTypes.ISetLoadingArgs>(actionsTypes.SET_LOADING);
