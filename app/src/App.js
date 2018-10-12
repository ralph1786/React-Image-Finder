import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/Navbar/NavBar";
import Search from "./components/search/Search";

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}
