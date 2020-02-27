import React, { Component } from "react";
import { Button, Box, CircularProgress } from "@material-ui/core";
import StationCard from "./StationCard";
import { filterCategorys, filterLinesByLine } from "../../utils/dataFilter";

class StationCardList extends Component {
  state = {
    activeTrafficStations: []
  };
  getStationsByCategory() {
    return filterCategorys("ptTram", "H", this.props.masterData);
  }

  getStationsByLine(line) {
    return filterLinesByLine(line, this.getStationsByCategory());
  }

  onRender = () => {
    if (this.getStationsByCategory().length === 0) {
      return <CircularProgress color="secondary" />;
    } else {
      console.log();
      return this.getStationsByLine(6).map((item, index) => {
        return (
          <StationCard
            key={item.VERKEHRSMITTEL + item.HALTESTELLEN_ID + index}
            data={item}
          />
        );
      });
    }
  };

  render() {
    console.log(this.getStationsByCategory());
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
