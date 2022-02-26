import React, { useState, useEffect } from "react";
 import "../../../App.css";
 import { register } from "../../redax/registerAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect ,Link } from "react-router-dom";
import Footer from "../../../section/footer";

const RegisterSection = () => {
  const auth = useSelector((state) => state.registerStore);

  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const signUp = (e) => {
    e.preventDefault();

    const user = {
      fullName,
      phone,
      email,
      password,
     };
     console.log(  user)

    dispatch(register(user));
    console.log( dispatch(register(user)))
 
  };

  if (auth.authenticate) {
    return <Redirect to={`/signIn`} />;
  }

  return (
    <div>
      <div
        className="apropos-page"
        id="home"
 
      >
        <br />
        <br />
        <h1 className="testaa">
           <span id="tests">R</span>egister
        </h1>
        <br />
        <br />
 

<div className="contact " >
        <div className="container-fluid" id='rest' >
             <div className="row  ">
               <div className="col-md-6"  id="colaco" >
                <div className="contact-form"  id="register-test"> 
                  
                  <form name="sentMessage" id="re-form"  onSubmit={signUp} encType="multipart/form-data" >
                    <div className="control-group">
                      <input
                        type="text"
                        className="email-testa"
                        id="email"
                        placeholder="Nom"
                        name="nom"
                        required="required"
                        data-validation-required-message="Entrer your Full Name"
                        onChange={(e) => {
                            setFullName(e.target.value);
                        }}
                      />

                     
                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control"
                        id="emfgdhail"
                        placeholder="Telephone"
                        name="telephone"
                        required="required"
                        data-validation-required-message="Entrer your Phone number"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                      <p className="help-block"></p>
                    </div>

                    <div className="control-group">
                      <input
                        type="email"
                        className="form-control"
                        id="emaidfghfhgsl"
                        placeholder="Your Email"
                        name="email"
                        required="required"
                        data-validation-required-message="Please enter your Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />

                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <input
                        type="password"
                        className="form-control"
                        id="subject"
                        placeholder="password"
                        name="password"
                        required="required"
                        data-validation-required-message="Please enter a password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      
                      <p className="help-block"></p>
                    </div>
<Link to='/signIn'>
                    <div id="signin-btn">
                      <button id="register-btn"
                        className="btn"
                        type="submit"
                       >
                        Sign in
                      </button>
                    </div>
                    </Link>
                  </form>
                </div>
              </div>
             </div>
   

 
     
  </div>
  
</div>
<hr />
      </div>

    </div>
  );
};

export default RegisterSection;