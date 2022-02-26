import logo from './logo.svg';
import './App.css';
import Nav from './section/navbar';
import Body from './section/body';
import First from './section/sec1';
import Foot from './section/footer';
import Home from './pages/Home';
import {BrowserRouter  ,Route,Switch} from 'react-router-dom'
import SigninSection from './authentification/component/signInSection/singInSection';
import { PrivetRoute } from './hawk/privateRoute';
import Profile from './userProfile/Profile';
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./authentification/redax/signInAction";
import React, { Fragment,Component,useEffect } from 'react';
import RegisterSection from './authentification/component/signInSection/registerSection';
import Dashboard from './dashboard/dashBoard';
import OneProduct from './section/oneProduct';
function App() {
  
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.signInStore);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());

    }
  }, []);
  return (
    <div> 
      
      <BrowserRouter>
      <div>
       <Nav/>   
      <Switch>
 

      <Route exact path='/' component={Home} /> 
 
<Route   path='/signIn' component={SigninSection} />
<Route path="/register" component={RegisterSection} />   
<PrivetRoute path="/profile" component={Profile} />   
<Route path="/dashbord" component={Dashboard} />   
<Route path="/getOne" component={OneProduct} />   







</Switch>

   <Foot/>
   </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
