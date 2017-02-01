import React from 'react';
import { Text } from 'react-native';

class QuestionIndexItem extends React.Component {
   constructor(props){
     super(props);
   }

   render(){
    return <Text>{this.props.question.title}</Text>;
   }


}

export default QuestionIndexItem;
