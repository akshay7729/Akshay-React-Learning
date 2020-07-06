import React from "react";
import "./Styles/App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import PLP from './Components/Plp'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <div className="row">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/plp/:id" component={PLP} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
