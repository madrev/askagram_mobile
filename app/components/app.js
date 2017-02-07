import React from 'react';
import { Navigator, View, Text, TouchableHighlight, StatusBar } from 'react-native';
import QuestionDetailContainer from "./question_detail/question_detail_container";
import QuestionIndexContainer from "./question_index/question_index_container";
import SessionFormContainer from "./session_form/session_form_container";
import * as Styles from "../assets/stylesheets";

const routes = [
  { title:"Session Form", index: 0 }
];

const navBar =
  <Navigator.NavigationBar
    routeMapper={{
      LeftButton: (route, navigator, index, navState) =>
        {
          if (route.index === 0) {
            return null;
          } else {
            return <TouchableHighlight onPress={() => navigator.pop()}>
                <Text style={Styles.navBar.text}>Back</Text>
              </TouchableHighlight>;
          }
        },
      Title: (route, navigator, index, navState) => {
        return <Text style={Styles.navBar.text}>Askagram</Text>;
      },
      RightButton: () => { return null; }
    }}
    style={Styles.navBar.container}
    />;


class App extends React.Component {
   render() {
     return (
       <View style={Styles.view}>
       <StatusBar
  barStyle="light-content"
/>
       <Navigator initialRoute={routes[0]}
         initialRouteStack={routes}
         navigationBar={navBar}
         style={{ flex:1 }}
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
       </View>

     );
   }
}

export default App;
