import { StyleSheet } from 'react-native';

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
