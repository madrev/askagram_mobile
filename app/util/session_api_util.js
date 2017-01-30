export const login = user => (
  fetch('http://localhost:3000/api/session', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
    }).then( res => (res.json())
  )
);
