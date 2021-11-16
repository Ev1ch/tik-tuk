import { all, takeEvery, call, put, select } from 'redux-saga/effects';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { TikTuksService } from 'services';
import { ITikTuk } from 'types';

function* getTikTuksWorker() {
  try {
    const limit: number = yield select((state) => state.tiktuks.options.limit);
    const tiktuks: ITikTuk[] = yield call(TikTuksService.getMany, { limit });
    yield put(actions.setTikTuks({ tiktuks }));
  } catch (error) {
    console.log(error);
  }
}

function* getTikTuksWatcher() {
  yield takeEvery(actionsTypes.GET_TIKTUKS, getTikTuksWorker);
}

function* tiktuksSaga() {
  yield all([getTikTuksWatcher()]);
}

export default tiktuksSaga;
