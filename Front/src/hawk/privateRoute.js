import React from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import SigninSection from '../authentification/component/signInSection/singInSection'
 
export const PrivetRoute = ({component:Component,...rest}) => {
    return (
 
        <Route {...rest} component={(props)=>{
               const token = window.localStorage.getItem('token')

               if(token){
                   return    <Component {...props} />  
               }else {
                 return     <Redirect   to={`signIn`} />   
               }
           }} />    
    
    )
} 