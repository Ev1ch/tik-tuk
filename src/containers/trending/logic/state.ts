import { ITikTuk } from 'types/tiktuk';

export interface ITrendingState {
  items: ITikTuk[] | null;
  isLoading: boolean;
  options: {
    limit: number;
    pageSize: number;
    pageNumber: number;
  };
}

export const initialState: ITrendingState = {
  items: null,
  isLoading: false,
  options: {
    limit: 30,
    pageSize: 4,
    pageNumber: 1,
  },
};

export default initialState;
