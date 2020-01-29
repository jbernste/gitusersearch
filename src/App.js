import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';


class App extends Component {
  render(){
   const name ='JB'; 
    return (
      
    <div className="App"> 
    <Navbar title='Github User Search Tool' icon='fab fa-github'/>  
    
    <div className='container'><br></br><h2 className='medium text-alert'>Search Github Username </h2>
      <form>
        <input type="text" className='box text-secondary' size='20' value='Search . . .'></input>
        <input type='submit' className='submit bg-success btn mg-2 text-center'></input>
      </form>
    </div>
    <Users /> 
    </div>  
    );
  }
}

export default App;
