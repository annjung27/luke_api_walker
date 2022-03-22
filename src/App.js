import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Form from './components/Form';
import Display from './components/Display';
import Error from './components/Error';

function App() {

  return (
    <div className="App">
      
      <Form />     

      <Switch>
        
        {/* direct to the route name and number we put in the form  */}
        <Route exact path="/:name/:number">    
          <Display />
        </Route>
        {/* direct to the error page if page are not found */}
        <Route exact path="/error"> 
          <Error />
        </Route>        

      </Switch>
    </div>
  );
}

export default App;
