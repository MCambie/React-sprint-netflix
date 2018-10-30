import React, { Component } from "react";
import '../App.css';
import { Route } from "react-router-dom";
import Header from './header';
import Showcard from "./showcard";
import Homepage from "./homepage";

class App extends Component {
render() {
return (
  <div>
  <Header />
  <Route path="/homepage" component={Homepage} />
  <Route  path="/showcard" component={Showcard} />
  </div>
);}}
export default App;
