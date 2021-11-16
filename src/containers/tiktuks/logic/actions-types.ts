import { ITikTuk } from 'types';

export const GET_TIKTUKS = 'TIKTUKS:GET_TIKTUKS';
export const SET_TIKTUKS = 'TIKTUKS:SET_TIKTUKS';
export const ADD_TIKTUKS = 'TIKTUKS:ADD_TIKTUKS';
export const SET_PAGE = 'TIKTUKS:SET_PAGE';

export interface ISetTikTuksArgs {
  tiktuks: ITikTuk[];
}

export interface IAddTikTuksArgs {
  tiktuks: ITikTuk[];
}

export interface ISetPage {
  page: number;
}
