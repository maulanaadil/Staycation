import React from "react";
import { createBrowserHistory } from "history";
// import { ToastContainer } from "react-toastify";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/style.scss";

import LandingPage from "pages/LandingPage";
import Example from "pages/Example";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/example" component={Example} />
        </Switch>
      </Router>
      {/* <ToastContainer></ToastContainer> */}
    </div>
  );
}

export default App;
