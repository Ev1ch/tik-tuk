import { IFeedTikTuk } from 'types/feed';
import { IUser } from 'types/user';

export const GET_USER = 'USER:GET_USER';
export const SET_USER = 'USER:SET_USER';
export const GET_USER_FEED = 'USER:GET_USER_FEED';
export const SET_USER_FEED = 'USER:SET_USER_FEED';

export interface IGetUserArgs {
  nick: string;
}

export interface IGetUserFeedArgs {
  nick: string;
}

export interface ISetUserArgs {
  user: IUser;
}

export interface ISetUserFeedArgs {
  feed: IFeedTikTuk[];
}
