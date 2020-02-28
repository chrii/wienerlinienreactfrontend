import React, { Component } from "react";
import _ from "lodash";
import { Button, Box, CircularProgress } from "@material-ui/core";
import StationCard from "./StationCard";
import { filterCategoryByLine } from "../../utils/dataFilter";
import DropDownComponent from "./DropDownComponent";

class StationCardList extends Component {
  state = {
    stationsByCategory: [],
    activeLine: [],
    lineNames: []
  };

  componentDidUpdate() {
    if (
      this.props.categoryData.length !== 0 &&
      this.state.stationsByCategory.length === 0
    ) {
      console.log(this.mapLineNames());
      this.setState({
        stationsByCategory: this.props.categoryData,
        activeLine: filterCategoryByLine(1, this.props.categoryData)
      });
    }
  }

  setTrafficLine = line => {
    const filtered = filterCategoryByLine(line, this.state.stationsByCategory);
    this.setState({
      activeLine: filtered
    });
  };

  mapLineNames = () => {
    const filterNames = _.chain(this.props.categoryData)
      .map("BEZEICHNUNG")
      .uniq()
      .value();
    this.setState({
      lineNames: filterNames
    });
  };

  onRender = () => {
    console.log(this.state);
    if (this.state.stationsByCategory.length === 0) {
      return <CircularProgress disableShrink color="secondary" />;
    } else {
      return this.state.activeLine.map((item, index) => {
        return (
          <div>
            <StationCard key={index} data={item} />
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <Box pl={10} pt={9}>
          <Box justifyContent="center" alignContent="center">
            <DropDownComponent names={this.state.lineNames} />
          </Box>
          {this.onRender()}
        </Box>
      </div>
    );
  }
}

export default StationCardList;
