import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
// import AnswerDetail from './answer_detail';
import { answersAsArray } from '../../reducers/selectors';



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    color: '#7C45B8',
  },
  instructions: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 5,
  },
  image:{
    width: 100,
    height: 100,
  }
});


class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestionDetail(2);
  }

  renderImages(){
    return answersAsArray(this.props.answers).map( answer =>
         <Image
        key = {answer.id}
        style={styles.image}
        source={{ uri: answer.image_url}}/>
    );
  }

  render() {
    console.log(this.props);
    return <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.instructions}>
        {this.props.title}
      </Text>
      {this.renderImages()}
    </ScrollView>;
  }

  // componentWillUnmount() {
  //   this.props.clearQuestionDetail();
  // }
}


 export default QuestionDetail;
