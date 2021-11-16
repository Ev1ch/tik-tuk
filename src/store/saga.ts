import { all } from '@redux-saga/core/effects';
import tiktuksSaga from 'containers/tiktuks/logic/saga';
import userSaga from 'containers/user/logic/saga';

function* saga() {
  yield all([tiktuksSaga(), userSaga()]);
}

export default saga;
