

export const likeAnswer = answerId => (
  fetch(`http://localhost:3000/api/answers/${answerId}/like`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    }).then( res => (res.json())
  )
);

export const unlikeAnswer = answerId => (
  fetch(`http://localhost:3000/api/answers/${answerId}/like`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    }).then( res => (res.json())
  )
);
