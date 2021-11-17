import { all, takeEvery, call, put, select } from 'redux-saga/effects';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { UserService } from 'services';
import { IUser } from 'types/user';
import { IFeed } from 'types/feed';

function* getUserWorker({ payload: { nick } }: ReturnType<typeof actions.getUser>) {
  try {
    const user: IUser = yield call(UserService.getUser, { nick });
    yield put(actions.setUser({ user }));
  } catch (error) {
    console.log(error);
  }
}

function* getUserWatcher() {
  yield takeEvery(actionsTypes.GET_USER, getUserWorker);
}

function* getUserFeedWorker({ payload: { nick } }: ReturnType<typeof actions.getUserFeed>) {
  try {
    const limit: number = yield select((state) => state.user.feed.options.limit);
    const { itemList: feed }: IFeed = yield call(UserService.getUserFeed, { nick, limit });
    yield put(actions.setUserFeed({ feed }));
  } catch (error) {
    console.log(error);
  }
}

function* getUserFeedWatcher() {
  yield takeEvery(actionsTypes.GET_USER_FEED, getUserFeedWorker);
}

function* userSaga() {
  yield all([getUserWatcher(), getUserFeedWatcher()]);
}

export default userSaga;
