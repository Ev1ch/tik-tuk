import { IFeedTikTuk } from 'types/feed';
import { IUser } from 'types/user';

export interface IUserInformationState {
  item: IUser | null;
}

export interface IUserFeedState {
  items: IFeedTikTuk[] | null;
  options: {
    limit: number;
    pageSize: number;
    pageNumber: number;
  };
}

export interface IUserState {
  isLoading: boolean;
  information: IUserInformationState;
  feed: IUserFeedState;
}

export const initialState: IUserState = {
  isLoading: false,
  information: {
    item: null,
  },
  feed: {
    items: null,
    options: {
      limit: 30,
      pageSize: 4,
      pageNumber: 1,
    },
  },
};

export default initialState;
