
import React, { useState } from 'react'
import './App.css';
import LoginForm from './components/LoginForm';
import LoginPage from './LoginPage'
import AddItem from './AddItem'


function App() {
  const adminUser = {
    username: 'admin',
    password: 'admin123'
  }

  const [user, setUser] = useState({username:''})
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);

    if (details.username == adminUser.username && details.password == adminUser.password){
    return setUser({
        username: details.username,
      });
    }else {
      setError('Username or password is incorrect')
    }
  }

  const Logout = () => {
    console.log('Logout');
  }


  return (
    <div className="App">
     <LoginForm Login={Login} error={error}/>
      <header className="App-header">
        <LoginPage />
        <AddItem />
      </header>
    </div>
  );
}

export default App;
