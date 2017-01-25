export const fetchQuestions = () => (
  $.ajax( {
    method: "GET",
    url: "api/questions"
  })
);

export const fetchQuestionDetail = (id) => (
  fetch(`http://localhost:3000/api/questions/${id}`).then(
    res => (res.json())
  )
);

// export const createQuestion = question => (
//   $.ajax( {
//     method: "POST",
//     url: "api/questions",
//     data: question
//
//   })
// );
//
// export const searchQuestions = query => (
//  $.ajax( {
//    method: "GET",
//    url: `api/questions/search?query=${query}`
//  })
// );
