import { all } from '@redux-saga/core/effects';
import tiktuksSaga from 'containers/tiktuks/logic/saga';

function* saga() {
  yield all([tiktuksSaga()]);
}

export default saga;
