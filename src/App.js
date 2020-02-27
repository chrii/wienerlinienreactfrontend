import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import teal from "@material-ui/core/colors/teal";
import Grid from "@material-ui/core/Grid";
import Layout from "./components/LandingPage/Layout";
import { Typography } from "@material-ui/core";
import StationCardList from "./components/Cards/StationCardList";
import Sidemenu from "./components/LandingPage/SideMenu";

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
      primary: teal,
      secondary: lightBlue
    }
  });

  render() {
    return (
      <div>
        <ThemeProvider theme={this.theme}>
          <Layout />
          <Grid container spacing={3} style={{ padding: 10 }}>
            <Grid item xs>
              <Typography title="h1">News</Typography>
            </Grid>
            <Grid item xs>
              <StationCardList masterData={this.state.masterData} />
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
