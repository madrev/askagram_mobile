import { combineReducers } from 'redux';
import questionDetailReducer from './question_detail_reducer';
import sessionReducer from './session_reducer';
import questionsReducer from './questions_reducer';

const rootReducer = combineReducers( {
  questionDetail: questionDetailReducer,
  session: sessionReducer,
  questions: questionsReducer
});

export default rootReducer;
