import React from 'react';
import UnansweredIndex from './unanswered_index';
import QuestionIndexItem from './question_index_item';
import { View } from 'react-native';




class QuestionIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {

    return <View>
        <UnansweredIndex questions={this.props.unansweredQuestions}/>
        { this.props.answeredQuestions.map((question, idx) =>
          <QuestionIndexItem key={idx}
                             question={question}/>) }
    </View>;
  }


}

export default QuestionIndex;
