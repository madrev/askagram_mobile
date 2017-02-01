import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import  { fetchQuestions, clearErrors, fetchQuestionDetail } from '../../actions/question_actions';
import { answeredQuestions, unansweredQuestions } from '../../reducers/selectors';


const mapStateToProps = ({ questions }, ownProps) => ({
  questions: questions,
  unansweredQuestions: unansweredQuestions(questions),
  answeredQuestions: answeredQuestions(questions),
  navigator: ownProps.navigator
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchQuestionDetail: (id) => dispatch(fetchQuestionDetail(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
