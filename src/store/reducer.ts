import { combineReducers } from 'redux';
import tiktuksReducer from 'containers/tiktuks/logic';

const reducer = combineReducers({
  tiktuks: tiktuksReducer,
});

export default reducer;
