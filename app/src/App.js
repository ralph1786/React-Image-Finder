import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/Navbar/NavBar";
import Search from "./components/search/Search";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}
