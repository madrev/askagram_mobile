import { combineReducers } from 'redux';
import questionDetailReducer from './question_detail_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers( {
  questionDetail: questionDetailReducer,
  session: sessionReducer
});

export default rootReducer;
