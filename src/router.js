import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Form from "./routes/form";
import FormInIframe from "./routes/formInIframe";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/form" exact component={Form} />
        <Route path="/formInIframe" exact component={FormInIframe} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
