import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import { formSchema } from './FormSchema';
import { useHistory } from "react-router-dom"
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function SignUp(){
    const [credentials, setCredentials] = useState({name: '',
pasword: '', role:''});
const [errors, setErrors] = useState ({name:'', password:''});
const history = useHistory();
const [disabled, setDisabled] = useState(true)
const setCredentialErrors = (name, value) => {
    yup.reach(formSchema, name).validate(value)
    .then(() => setErrors({...errors, [name]:''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}))
}


const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
    setCredentialErrors(e.target.name, e.target.value)
}
const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post("/signUp", credentials) //needs actual backend points
    .then(res => {
        console.log(res);
        localStorage.setItem("authToken", res.data.token); // needs to be replaced with actual backend token
        if(credentials.role === 'renter'){
            history.push("/itemList") //route for tech items page
        }else if(credentials.role === 'student'){
            history.push("/") //routes to login page
        }
    })
    .catch(err => {
        console.log(err)
    })
}

useEffect(() => {
    formSchema.isValid(credentials).then(valid => setDisabled(!valid))
}, [credentials])

return(
    <div className="signUpForm">
        <div style={{ color : 'red' }}>
            <p>{errors.name}</p>
            <p>{errors.password}</p>
        </div>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input 
                value={credentials.name} 
                name="name" 
                type="text" 
                onChange={handleChange}
            />
            <br />
            <label htmlFor="password">Password </label>
                <input 
                    value={credentials.password} 
                    name="password" 
                    type="password"
                    onChange={handleChange}
                />
                <br />
            <label htmlFor="role">Role</label>
            <select value={credentials.role} name="role" onChange={handleChange} >
                    <option value="">--Please select a role--</option>
                    <option value="user">User</option>
                    <option value="renter">Renter</option>
                 </select>
                <br />
                <button disabled={disabled} type="submit">Submit</button>

        </form>

    </div>
)
}