import { all, takeEvery, call, put, select } from 'redux-saga/effects';
import { UserService } from 'services';
import { IUser } from 'types/user';
import { IFeed } from 'types/feed';
import * as actions from './actions';
import * as actionsTypes from './actions-types';

function* getUserWorker({ payload: { nick } }: ReturnType<typeof actions.getUser>) {
  try {
    yield put(actions.setLoading({ isLoading: true }));

    const feedLimit: number = yield select((state) => state.user.feed.options.limit);
    const { itemList: tiktuks }: IFeed = yield call(UserService.getUserFeed, {
      nick,
      limit: feedLimit,
    });
    const information: IUser = yield call(UserService.getUser, { nick });

    yield put(actions.setUser({ information: { item: information }, feed: { items: tiktuks } }));
  } finally {
    yield put(actions.setLoading({ isLoading: false }));
  }
}

function* getUserWatcher() {
  yield takeEvery(actionsTypes.GET_USER, getUserWorker);
}

function* userSaga() {
  yield all([getUserWatcher()]);
}

export default userSaga;
