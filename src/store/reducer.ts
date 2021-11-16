import { combineReducers } from 'redux';
import trendingReducer from 'containers/trending/logic';
import userReducer from 'containers/user/logic';

const reducer = combineReducers({
  trending: trendingReducer,
  user: userReducer,
});

export default reducer;
