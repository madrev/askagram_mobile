//TODO: handle errors https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb#.fnfwx7bgg
import { checkStatus } from './api_util';


export const login = user => (
  fetch('http://localhost:3000/api/session', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  }).then(res => checkStatus(res)).then(
     res => (res.json())
  ).catch(e => console.log(e.response))
);
