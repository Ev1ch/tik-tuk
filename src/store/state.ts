import { ITikTuksState } from 'containers/tiktuks/logic/state';
import { IUserState } from 'containers/user/logic/state';

interface IRootState {
  tiktuks: ITikTuksState;
  user: IUserState;
}

export default IRootState;
