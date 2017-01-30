//TODO: handle errors https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb#.fnfwx7bgg

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
