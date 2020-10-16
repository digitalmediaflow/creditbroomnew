import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FirstForm from "./Components/FirstForm";
import About from "../src/Components/About"
import Login from "../src/Components/Login"
import Landing from "./Components/LandingPage";
import howitworks from "../src/Components/Howitworks"
import contact from "../src/Components/Contact"

export default function Routes() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
          </ul> */}
        {/* </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      
        <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/login" component={Login}  />
                <Route path="/about" component={About} />
                <Route path="/signup" component={FirstForm} />
                <Route path="/how" component={howitworks} />
                <Route path="/contact" component={contact} />
        </Switch>
      </div>
    </Router>
  );
}