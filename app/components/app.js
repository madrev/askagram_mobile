import React from 'react';
import { Navigator, Text } from 'react-native';
import QuestionDetailContainer from "./question_detail/question_detail_container";
import SessionFormContainer from "./session_form/session_form_container";

const routes = [
  { title:"Session Form", index: 0 }
  // { title:"Question Detail", index: 1},
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
            case "Question Detail":
              return <QuestionDetailContainer/>;
            default:
              return <Text>Routing error</Text>;
           }
         }}/>

     );
   }
}

export default App;
