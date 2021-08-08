import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import history from "./utils/history";
import Spinner from "./Components/Spinner";
import { ConnectedRouter } from "connected-react-router";
import  List  from "./Pages/List";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
            <Router>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/list">
                <List />
              </Route>
            </Router>
          </Switch> 
        </ConnectedRouter>
        <Spinner />
      </div>
    );
  }
}

export default App;
