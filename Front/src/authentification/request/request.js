import axios from "axios"





export const fetchLogin = (token) =>
  axios
    .post('http://localhost:3003/frip/user/signIn',token);



  export const fetchRegister = (user) =>
    axios
    .post('http://localhost:3003/frip/user/register',{...user}).then((res) => res.data);