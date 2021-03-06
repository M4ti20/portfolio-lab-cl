import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { browserHistory } from 'react-router';
import fire from "./Components/Fire/Fire"

import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Logout from "./Components/LogOut/LogOut";
import ThingsForm from "./Components/Oddaj-rzeczy-form/Things-form";


export const EmailContext = React.createContext(null);

function App() {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  

  const handleLogin = () => {
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disable":
        case "autch/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
        break;
      }
    });
  }

  
  const handleSignUp = () => {
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
        break;
      }
    });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        setUser(user)
      }else {
        setUser("")
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [])

  useEffect(()=>{
    if(user){
      browserHistory.push("/");
    }
  }, [user]);



    return (
      <>
        {/* {user ? ( */}
          <EmailContext.Provider value={email}>
            <Router>
              <Switch>
                <Route exact path="/"><Home user={user}/></Route>
                <Route path="/oddaj-rzeczy" component={ThingsForm}/>
                <Route path="/login">
                  <Login
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                    handleLogin={handleLogin}
                    emailError={emailError}
                    passwordError={passwordError}
                  />
                </Route> 
                <Route path="/register">
                  <Register
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                    handleSignUp={handleSignUp}
                    emailError={emailError}
                    passwordError={passwordError}
                  />
                </Route>
                <Route path="/logout" component={Logout} />

              </Switch>
            </Router>
          </EmailContext.Provider>
       
        {/* ) : ( */}
{/* 
          <Router>
            <Switch>
              <Route exact path="/"> <Home /> </Route>
              <Route path="/login">
              <Login
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleLogin={handleLogin}
                emailError={emailError}
                passwordError={passwordError}
              />
              </Route> 
              <Route path="/register">
              <Register
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleSignUp={handleSignUp}
                emailError={emailError}
                passwordError={passwordError}
              />
              </Route>
              <Route path="/logout" component={Logout} />
            </Switch>
          </Router> 
        )} */}
      </>
    );
}

export default App;

