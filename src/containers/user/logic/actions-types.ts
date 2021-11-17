import IRootState from 'store/state';
import { IUserFeedState, IUserInformationState } from './state';

export const GET_USER = 'USER:GET_USER';
export const SET_USER = 'USER:SET_USER';
export const SET_LOADING = 'USER:SET_LOADING';

export interface IGetUserArgs {
  nick: string;
}

export interface ISetUserArgs {
  information: Partial<IUserInformationState>;
  feed: Partial<IUserFeedState>;
}

export interface ISetLoadingArgs {
  isLoading: boolean;
}
