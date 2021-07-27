import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import ItemList from './components/ItemList';
import './App.css';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
    <Router>
     <header className="App-header">
        <h1>Use My Tech Stuff</h1>
        <NavBar/>
      </header> 
      {/* <NavBar/> */}
    
    
    <Switch> 
      <Route exact path='/' component={LoginPage}/>
      <PrivateRoute path='/itemList' component={ItemList} />
    </Switch>
    </Router>


    
    
    </div>
  );
}

export default App;
