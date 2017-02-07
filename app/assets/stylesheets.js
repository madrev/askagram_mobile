import { StyleSheet } from 'react-native';

const COLORS = {
  purple: "#3E245B",
  green: "#7A9983",
  darkGreen: "#607867",
  white: "#000000",
  lightGrey: "#e2e2e2"
 };

export const navBar = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: COLORS.purple,
  },
  text: {
    color: 'white',
    marginLeft: 10
  }
});

export const view = StyleSheet.create({
  flex: 1
});



export const global = StyleSheet.create({
  button: {
    backgroundColor: COLORS.green,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    justifyContent: 'center'
  },
  scrollContainer: {
    marginTop: 60
  },
  textInput: {
    borderColor: COLORS.lightGrey,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
  },
  flexRow: {
    flexDirection: 'row'
  }
});

export const questionIndex = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  touchableHighlight: {
    padding: 5,
  }
});

export const questionDetail = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  heading: {
    textAlign: 'center',
    color: 'blue',
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
}

});
