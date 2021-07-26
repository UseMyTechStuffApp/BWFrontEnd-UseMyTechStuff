import axios from 'axios';

export const axiosWithAuth = () => {
 const token = localStorage.getItem('token')

 return axios.create({
     baseURL: 'http://fakestoreapi.com/products',
     headers: {
         'Content-Type': 'application/json',
         Authoriaztion: `${token}`
     }
 })
}

export default axiosWithAuth;