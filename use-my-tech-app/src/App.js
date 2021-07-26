import React, { useState } from 'react'
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpPage from './SignUpPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

    if (details.username === adminUser.username && details.password === adminUser.password){
    return setUser({
        username: details.username,
      });
    }else {
      setError('Username or password is incorrect')
    }
  }

  


  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path='/'>
          <LoginForm Login={Login} error={error}/>
        </Route>
        <Route exact path='/signup'>
          <SignUpPage />
        </Route>
        <Route exact path='/addItem'>
          <AddItem />
        </Route>
      </Switch>
      </header>
      
    </div>
    </Router>
  );
}

export default App;
