import { StyleSheet } from 'react-native';

const COLORS = {
  purple: "#3E245B",
  green: "#7A9983",
  darkGreen: "#607867"
 };

export const global = StyleSheet.create({
  button: {
    height: 25,
    backgroundColor: COLORS.green
  }
});

export const questionIndex = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  touchableHighlight: {
    padding: 5,
  }
});

export const questionDetail = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 10,
    marginBottom: 10,
  },
});

export const answerDetail = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image:{
    width: 300,
    height: 300,
  }
});

export const sessionForm = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingTop: 20,
},
textInput: {
  borderRadius: 5,
  borderWidth: 1,
  height: 44,
  paddingHorizontal: 10,
}

});
