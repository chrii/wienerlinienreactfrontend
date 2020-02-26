import React, { Component } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import teal from "@material-ui/core/colors/teal";
import Grid from "@material-ui/core/Grid";
import Layout from "./components/LandingPage/Layout";

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
        <ThemeProvider theme={this.theme}>
          <Layout />
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs spacing={6}></Grid>
            <Grid item xs></Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
