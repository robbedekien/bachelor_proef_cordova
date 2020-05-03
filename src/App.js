import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Overview from "./containers/musicOverview/musicOverview.container";
import Detail from "./containers/musicDetail/musicDetail.container";
import Add from "./containers/musicAdd/musicAdd.container";
import BottomNav from "./components/bottomNav/bottomNav.component";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/detail/:id" component={Detail} />
        <Route path="/add" component={Add} />
        <Route path="/" exact component={Overview} />
      </Switch>
      <BottomNav history={props.history} />
    </div>
  );
}

export default withRouter(App);
