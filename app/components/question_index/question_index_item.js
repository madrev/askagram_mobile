import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import * as Styles from '../../assets/stylesheets';

class QuestionIndexItem extends React.Component {
   constructor(props){
     super(props);
   }

   render(){
    return <TouchableHighlight style={Styles.questionIndex.questionButton}
                               onPress={this.props.navigateToQuestion}>
      <Text>{this.props.question.title}</Text>
    </TouchableHighlight>;
   }


}

export default QuestionIndexItem;
