import { combineReducers } from 'redux';
import questionDetailReducer from './question_detail_reducer';

const rootReducer = combineReducers( {
  questionDetail: questionDetailReducer
});

export default rootReducer;
