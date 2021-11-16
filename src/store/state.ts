import { ITrendingState } from 'containers/trending/logic/state';
import { IUserState } from 'containers/user/logic/state';

interface IRootState {
  trending: ITrendingState;
  user: IUserState;
}

export default IRootState;
