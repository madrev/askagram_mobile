import React from 'react';
import UnansweredIndex from './unanswered_index';
import QuestionIndexItem from './question_index_item';
import { View } from 'react-native';
import * as Styles from '../../assets/stylesheets';




class QuestionIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchQuestions();
  }

  navigateToQuestion(id) {
    return () => (
      this.props.fetchQuestionDetail(id).then(
      () => this.props.navigator.push({ title:"Question Detail"}))
    );
  }

  render() {

    return <View style={Styles.questionIndex.container}>
        <UnansweredIndex questions={this.props.unansweredQuestions}/>
        { this.props.answeredQuestions.map((question, idx) =>
          <QuestionIndexItem key={idx}
                             question={question}
                             navigateToQuestion={this.navigateToQuestion(question.id)}/>) }
    </View>;
  }


}

export default QuestionIndex;
