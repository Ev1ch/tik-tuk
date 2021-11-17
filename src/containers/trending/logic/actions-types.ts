import { ITikTuk } from 'types/tiktuk';

export const GET_TRENDING = 'TRENDING:GET_TRENDING';
export const SET_TRENDING = 'TRENDING:SET_TRENDING';
export const ADD_TRENDING = 'TRENDING:ADD_TRENDING';
export const SET_PAGE = 'TRENDING:SET_PAGE';
export const SET_LOADING = 'TRENDING:SET_LOADING';

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

export interface ISetLoading {
  isLoading: boolean;
}
