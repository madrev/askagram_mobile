import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
// import AnswerDetail from './answer_detail';
import { answersAsArray } from '../../reducers/selectors';
import * as Styles from '../../assets/stylesheets';
import AnswerDetail from './answer_detail';





class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  renderImages(){
    return answersAsArray(this.props.answers).map( answer =>
         <Image
        key = {answer.id}
        style={Styles.answerDetail.image}
        source={{ uri: answer.image_url}}/>
    );
  }

  renderAnswerDetails() {
    const allAnswers = answersAsArray(this.props.answers);
    if(allAnswers.length !== 0 )  {
      return (allAnswers.map((answer) => <AnswerDetail key={answer.id}
                                               answer={answer}
                                               deleteAnswer={this.props.deleteAnswer} />));
    } else {
      return <Text>"Nothing here"</Text>;
    }
  }

  render() {
    return <ScrollView contentContainerStyle={Styles.questionDetail.container}>
      <Text style={Styles.questionDetail.heading}>
        {this.props.title}
      </Text>
      {this.renderAnswerDetails()}
    </ScrollView>;
  }

  // componentWillUnmount() {
  //   this.props.clearQuestionDetail();
  // }
}


 export default QuestionDetail;
