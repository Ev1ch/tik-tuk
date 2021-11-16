import { ITikTuk } from 'types';

export interface ITikTuksState {
  items: ITikTuk[];
  options: {
    limit: number;
    pageSize: number;
    pageNumber: number;
  };
}

export const initialState: ITikTuksState = {
  items: [],
  options: {
    limit: 30,
    pageSize: 4,
    pageNumber: 1,
  },
};

export default initialState;
