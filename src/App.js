import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import LogOut from "./Components/LogOut/LogOut";

const App = () => {
  return (
    <Router>
      <Switch>
       <Route exact path="/"> <Home /> </Route>
       <Route path="/login" component={Login} />
       <Route path="/register" component={Register} />
       <Route path="/logout" component={LogOut} />
      </Switch>
    </Router>
  );
}

export default App;
