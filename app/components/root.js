import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/store';

import QuestionDetailContainer from "./question_detail/question_detail_container";

const store = configureStore();

const Root = () => {

  return (
    <Provider store={ store }>
       <QuestionDetailContainer />
    </Provider>
  );
};

export default Root;
