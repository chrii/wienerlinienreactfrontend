import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import teal from "@material-ui/core/colors/teal";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import StationCardList from "./components/Cards/StationCardList";
import SideMenu from "./components/LandingPage/SideMenu";
import { filterCategorys } from "./utils/dataFilter";
import _ from "lodash";

const URL = "http://localhost:3001";

class App extends Component {
  state = {
    masterData: [],
    activeCategory: []
  };
  componentDidMount() {
    this.getMasterData();
  }
  componentDidUpdate() {
    if (
      this.state.masterData.length !== 0 &&
      this.state.activeCategory.length === 0
    ) {
      this.setActiveCategory("ptTram");
    }
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

  setActiveCategory = category => {
    const filtered = filterCategorys(category, "H", this.state.masterData);
    this.setState({
      activeCategory: filtered
    });
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
          <SideMenu onCategoryClick={this.setActiveCategory} />
          <Grid container spacing={2} style={{ padding: 20 }}>
            <Grid item xs>
              <StationCardList categoryData={this.state.activeCategory} />
            </Grid>
            <Grid item xs>
              <Typography title="h1">News</Typography>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
