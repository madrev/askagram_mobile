import React from 'react';
// import LikeDisplayContainer from "../like_display/like_display_container";
// import { likersAsArray } from "../../reducers/selectors";
import * as Styles from '../../assets/stylesheets';
import { View, Text, Image } from 'react-native';

class AnswerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.answer = this.props.answer;
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    return e => {
      e.preventDefault();
      this.props.deleteAnswer(id);
    };
  }

  // deleteButton(id) {
  //   if(this.props.ownAnswer) return <button onClick={this.handleDelete(id)}
  //                                           className="delete-button">Delete</button>;
  // }

  render() {
    return <View className="answer-detail">
        <Text>{this.answer.poster.username}</Text>
        <Text>{this.answer.time_ago} ago</Text>
        <Image style={Styles.answerDetail.image}
               source={{ uri: this.answer.image_url}}/>
      </View>;
  }

}

export default AnswerDetail;
