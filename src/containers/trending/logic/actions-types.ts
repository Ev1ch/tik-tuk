import { ITikTuk } from 'types';

export const GET_TRENDING = 'TRENDING:GET_TRENDING';
export const SET_TRENDING = 'TRENDING:SET_TRENDING';
export const ADD_TRENDING = 'TRENDING:ADD_TRENDING';
export const SET_PAGE = 'TRENDING:SET_PAGE';

export interface IGetTrandingArgs {
  toSet?: boolean;
}

export interface ISetTrendingArgs {
  tiktuks: ITikTuk[];
}

export interface IAddTrendingArgs {
  tiktuks: ITikTuk[];
}

export interface ISetPage {
  page: number;
}
