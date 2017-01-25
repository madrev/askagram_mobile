import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
// import AnswerDetail from './answer_detail';
import { answersAsArray } from '../../reducers/selectors';



const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 50,
    height: 50,
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
    answersAsArray(this.props.answers).map( answer =>
      { console.log(answer.image_url);
        return <Image
        style={styles.image}
        source={{ uri: "https://res.cloudinary.com/askagram/image/upload/v1484290204/fkdg2yommbkc3tsn0ega.png"}}/>;
    });
  }

  render() {
    console.log(this.props);
    return <View style={styles.container}>
      <Text style={styles.instructions}>
        {this.props.title}
      </Text>
      { this.renderImages() }
    </View>;
  }

  // componentWillUnmount() {
  //   this.props.clearQuestionDetail();
  // }
}


 export default QuestionDetail;
