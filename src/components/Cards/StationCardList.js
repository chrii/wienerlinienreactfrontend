import React, { Component } from "react";
import { Button } from "@material-ui/core";
import StationCard from "./StationCard";
import { filterLines } from "../../utils/dataFilter";

class StationCardList extends Component {
  state = {
    activeTrafficStations: []
  };
  getTrafficStation() {
    return filterLines("ptTram", "H", this.props.masterData);
  }

  render() {
    console.log(this.getTrafficStation());
    return (
      <div>
        <Button variant="contained">Metro</Button>
        {this.getTrafficStation().map((item, index) => {
          return (
            <StationCard
              key={item.VERKEHRSMITTEL + item.HALTESTELLEN_ID + index}
              data={item}
            />
          );
        })}
      </div>
    );
  }
}

export default StationCardList;
