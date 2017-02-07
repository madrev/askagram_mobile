import React from 'react';
import { Text, View } from 'react-native';
import * as Styles from '../../assets/stylesheets';

const UnansweredIndex = ({questions, openModal}) => (
  <View style={Styles.questionIndex.unansweredIndex}>
    <Text>New Questions</Text>
    <Text>Be first to answer</Text>
      { questions.slice(0,6).map( question =>
            <Text key={question.id}>{question.title}</Text>
      )}
  </View>
);

export default UnansweredIndex;
