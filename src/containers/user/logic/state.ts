import { ITikTuk, IUser } from 'types';

export interface IUserState {
  user: {
    item: IUser | null;
  };
  feed: {
    items: ITikTuk[];
    options: {
      limit: number;
      pageSize: number;
      pageNumber: number;
    };
  };
}

export const initialState: IUserState = {
  user: {
    item: null,
  },
  feed: {
    items: [],
    options: {
      limit: 30,
      pageSize: 4,
      pageNumber: 1,
    },
  },
};

export default initialState;
