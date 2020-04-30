import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Router>
  )
}

export default App;
