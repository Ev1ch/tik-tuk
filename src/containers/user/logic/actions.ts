import { createAction } from '@reduxjs/toolkit';
import * as actionsTypes from './actions-types';

export const getUser = createAction<actionsTypes.IGetUserArgs>(actionsTypes.GET_USER);
export const setUser = createAction<actionsTypes.ISetUserArgs>(actionsTypes.SET_USER);
export const getUserFeed = createAction<actionsTypes.IGetUserFeedArgs>(actionsTypes.GET_USER_FEED);
export const setUserFeed = createAction<actionsTypes.ISetUserFeedArgs>(actionsTypes.SET_USER_FEED);
