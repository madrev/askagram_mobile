import React from 'react';
import { Text, View } from 'react-native';


const UnansweredIndex = ({questions, openModal}) => (
  <View>
    <Text>New Questions</Text>
    <Text>Be first to answer</Text>
      { questions.slice(0,6).map( question =>
            <Text key={question.id}>{question.title}</Text>
      )}
  </View>
);

export default UnansweredIndex;
