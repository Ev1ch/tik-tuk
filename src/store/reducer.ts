import { combineReducers } from 'redux';
import tiktuksReducer from 'containers/tiktuks/logic';
import userReducer from 'containers/user/logic';

const reducer = combineReducers({
  tiktuks: tiktuksReducer,
  user: userReducer,
});

export default reducer;
