import React, { Component } from "react";
import { Button, Box, CircularProgress } from "@material-ui/core";
import StationCard from "./StationCard";
import { filterLines } from "../../utils/dataFilter";

class StationCardList extends Component {
  state = {
    activeTrafficStations: []
  };
  getTrafficStation() {
    return filterLines("ptTram", "H", this.props.masterData);
  }

  onRender() {
    if (this.getTrafficStation().length === 0) {
      return <CircularProgress color="secondary" />;
    } else {
      return this.getTrafficStation().map((item, index) => {
        return (
          <StationCard
            key={item.VERKEHRSMITTEL + item.HALTESTELLEN_ID + index}
            data={item}
          />
        );
      });
    }
  }

  render() {
    console.log(this.getTrafficStation());
    return (
      <div>
        <Box pl={10} pt={9}>
          {this.onRender()}
        </Box>
      </div>
    );
  }
}

export default StationCardList;
