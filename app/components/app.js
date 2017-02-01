import React from 'react';
import { Navigator, Text } from 'react-native';
import QuestionDetailContainer from "./question_detail/question_detail_container";
import QuestionIndexContainer from "./question_index/question_index_container";
import SessionFormContainer from "./session_form/session_form_container";

const routes = [
  { title:"Session Form" }
];

class App extends React.Component {
   render() {
     return (
       <Navigator initialRoute={routes[0]}
         initialRouteStack={routes}
         renderScene={ (route, navigator) => {
           switch(route.title){
            case "Session Form":
              return <SessionFormContainer navigator={navigator}/>;
            case "Question Index":
              return <QuestionIndexContainer navigator={navigator}/>;
            case "Question Detail":
              return <QuestionDetailContainer navigator={navigator}/>;
            default:
              return <Text>Routing error</Text>;
           }
         }}/>

     );
   }
}

export default App;
