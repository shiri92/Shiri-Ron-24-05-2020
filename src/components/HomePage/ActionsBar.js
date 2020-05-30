import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./HomePage.style";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";
import { getLocations, toggleCToF } from "../../actions/weatherActions";
import { debounce } from "lodash";

class ActionsBar extends Component {
  state = {
    autoCompleteOptions: [],
  };

  handelSearch = debounce(async (value) => {
    // when searching value, fetch all cities from api to set the dropdown
    if (value) await this.props.getLocations(value);
    else await this.props.getLocations(this.props.currLocation.LocalizedName);
    const filterLocationsByName = this.props.locations?.map(
      (location) => location.LocalizedName
    );
    this.setState({ autoCompleteOptions: filterLocationsByName });
  }, 500);

  render() {
    const { classes, getNewLocation, isTempAsC } = this.props;
    return (
      <div className={classes.actionsBarContainer}>
        <Autocomplete
          freeSolo
          classes={{ root: classes.autocomplete }}
          options={this.state.autoCompleteOptions}
          onChange={(e, value) => getNewLocation(value)}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label="Search"
                margin="normal"
                variant="outlined"
                onChange={(e) => this.handelSearch(e.target.value)}
              />
            );
          }}
        />
        <div>
          <div>{`Change To ${isTempAsC ? "F" : "C"}`}</div>
          <Switch
            checked={isTempAsC}
            onChange={() => this.props.toggleCToF()}
            name="checkedA"
          />
        </div>
      </div>
    );
  }
}

ActionsBar.propTypes = {
  classes: PropTypes.object,
};

const mapStateToPtops = (state) => ({
  locations: state.locationsReducer.locations,
  currLocation: state.locationsReducer.currLocation,
  isTempAsC: state.weatherReducer.isTempAsC,
});

const currComponent = withStyles(styles, { withTheme: true })(ActionsBar);

export default connect(mapStateToPtops, {
  getLocations,
  toggleCToF,
})(currComponent);
