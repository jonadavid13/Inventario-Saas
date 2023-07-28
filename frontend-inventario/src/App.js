import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from "./routes/routes";
import "./assets/styles/index.scss";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route) => (<Route key={route.path} path={route.path} component={route.component}/>)
          )}
        </Switch>
      </Router>
    </>
  );
}

export default App;
