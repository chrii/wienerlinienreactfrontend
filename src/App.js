import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import teal from "@material-ui/core/colors/teal";
import Grid from "@material-ui/core/Grid";
import Layout from "./components/LandingPage/Layout";
import Card from "./components/Cards/StationCard";
import { Typography } from "@material-ui/core";

const URL = "http://localhost:3001";

class App extends Component {
  state = {
    masterData: []
  };
  componentDidMount() {
    this.getMasterData();
  }

  getMasterData = async () => {
    try {
      const endpoint = "/masterdata";
      const response = await axios.get(URL + endpoint);
      if (response.status === 200) {
        console.log(response);
        this.setState({
          masterData: [...response.data]
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  theme = createMuiTheme({
    palette: {
      primary: lightBlue,
      secondary: teal
    }
  });

  render() {
    if (this.state.masterData) {
      console.log(this.state.masterData);
    }
    return (
      <div>
        <ThemeProvider theme={this.theme}>
          <Layout />
          <Grid container spacing={3} style={{ padding: 10 }}>
            <Grid item xs>
              <Typography title="h1">News</Typography>
            </Grid>
            <Grid item xs spacing={6}>
              <Card />
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
