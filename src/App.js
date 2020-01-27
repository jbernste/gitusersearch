import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import userItem from './components/users/UserItem'
import './App.css';
import UserItem from './components/users/UserItem';

class App extends Component {
  render(){
   const name ='Monique'; 
    return (
      
    <div className="App"> 
    <Navbar title='Github User Search Tool' icon='fab fa-github'/>  
    <h2 className='medium text-alert'>Welcome { name }</h2>
    <UserItem /> 
    </div>  
    );
  }
}

export default App;
