import axios from 'axios';


const httpRequest = axios.create({
    baseURL: 'https://localhost:8080/api/todos',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const getTodos = async () =>{
    const resp = await httpRequest.get('/getTodos')
    return resp
}