import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Index from "./components/Index";
import Tracks from "./components/tracks/Tracks";
import Lyrics from "./components/tracks/Lyrics";
import { ContextController } from "./context/GlobalState";

function App() {
  return (
    <ContextController>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/tracks" component={Tracks} />
            <Route path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
      </BrowserRouter>
    </ContextController>
  );
}

export default App;
