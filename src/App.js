import { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import fire from "./Components/Fire/Fire"

import Home from "./Components/Home/Home"
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }else {
        this.setState({user: null });
      }
    })
  }

  render(){
    return (
      <>
        {this.state.user ? (
          <Router>
            <Layout/>
          </Router>
        ) : (
          <Router>
            <Switch>
              <Route exact path="/"> <Home /> </Route>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </Router> 
        )}
      </>
    );
  }
}

export default App;

