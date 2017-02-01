import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

class QuestionIndexItem extends React.Component {
   constructor(props){
     super(props);
   }

   render(){
    return <TouchableHighlight onPress={this.props.navigateToQuestion}>
      <Text>{this.props.question.title}</Text>
    </TouchableHighlight>;
   }


}

export default QuestionIndexItem;
