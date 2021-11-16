import { all, takeEvery, call, put, select } from 'redux-saga/effects';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { TikTuksService } from 'services';
import { ITikTuk } from 'types';

function* getTrandingWorker({ payload: { toSet } }: ReturnType<typeof actions.getTrending>) {
  try {
    const limit: number = yield select((state) => state.trending.options.limit);
    const tiktuks: ITikTuk[] = yield call(TikTuksService.getMany, { limit });

    if (toSet) {
      yield put(actions.setTrending({ tiktuks }));
    } else {
      yield put(actions.addTrending({ tiktuks }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* getTrandingWatcher() {
  yield takeEvery(actionsTypes.GET_TRENDING, getTrandingWorker);
}

function* trendingSaga() {
  yield all([getTrandingWatcher()]);
}

export default trendingSaga;
