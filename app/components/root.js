import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/store';

import QuestionDetailContainer from "./question_detail/question_detail_container";
import SessionFormContainer from "./session_form/session_form_container";

const store = configureStore();

const Root = () => {

  return (
    <Provider store={ store }>
       <SessionFormContainer />
    </Provider>
  );
};

export default Root;
