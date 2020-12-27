import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vault from "./pages/Vaultpage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/vault/:vaultID" render={() => <Vault />} />
      </Switch>
    </div>
  );
}

export default App;
