import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import "./App.css";

class App extends Component {
  render() {
    return (
     <Router>
       <div>
        <Header />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
       </div>
     </Router>
    );
  }
}

export default App;
