import React, { Component } from "react";
import "./App.css";
import { ThemeProvider } from "@material/core/ThemeProvider";
import { createMuiTheme } from "@material/core/styles";
import lightBlue from "@material/core/colors/lightBlue";
import teal from "@material/core/colors/teal";

class App extends Component {
  theme = createMuiTheme({
    palette: {
      primary: lightBlue,
      secondary: teal
    }
  });

  render() {
    return (
      <div>
        <ThemeProvider theme={this.theme}></ThemeProvider>
      </div>
    );
  }
}

export default App;
