import { all } from '@redux-saga/core/effects';
import trendingSaga from 'containers/trending/logic/saga';
import userSaga from 'containers/user/logic/saga';

function* saga() {
  yield all([trendingSaga(), userSaga()]);
}

export default saga;
