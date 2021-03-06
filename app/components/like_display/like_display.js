import React from 'react';
import Icon from 'react-native-fontawesome';
import { View, Text, TouchableHighlight } from 'react-native';
import * as Styles from '../../assets/stylesheets';
class LikeDisplay extends React.Component {
  constructor(props){
    super(props);
    this.answerId = this.props.answerId;
    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike() {
    if(this.likedByCurrentUser()) this.unlikeAnswer();
    else this.likeAnswer();
  }

  likeAnswer() {
    this.props.likeAnswer(this.props.answerId);
  }

  likedByCurrentUser() {
    return (this.props.likers.map( liker => liker.id ).indexOf(this.props.currentUser.id) !== -1);
  }


  unlikeAnswer() {
    this.props.unlikeAnswer(this.props.answerId);
  }

  likeText() {
    switch(this.props.likers.length) {
      case 0:
        return "";
      case 1:
        return "1 person likes this.";
      default:
        return `${this.props.likers.length} people like this.`;
    }
  }

  render() {
    let buttonText = (this.likedByCurrentUser() ? "Unlike" : "Like");
    return <View style={Styles.global.flexRow}>
      <TouchableHighlight onPress={this.toggleLike}>
        <Text>"Heart Here"</Text>
      </TouchableHighlight>
      <Text>{this.likeText()}</Text>
    </View>;
  }

}

export default LikeDisplay;
