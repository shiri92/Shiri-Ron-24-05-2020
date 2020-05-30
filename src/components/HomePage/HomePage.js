import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./HomePage.style";
import moment from "moment";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import {
  getCurrLocation,
  getCurrentWeather,
  get5DaysForecast,
  addToFavorites,
  removeFromFavorites,
} from "../../actions/weatherActions";
import ActionsBar from "./ActionsBar";
import weatherService from "../../services/weatherService";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CurrWeatherIcon from "../CurrWeatherIcon";
import emptyStar from "../../icons/empty.png";
import fullStar from "../../icons/full.png";
import ErrorModal from "../ErrorModal";

class HomePage extends Component {
  state = {
    defaultCity: "Tel aviv",
    isHoverStar: false,
    isModalOpen: false,
    hasError: false,
  };

  componentDidMount = async () => {
    // fetch what's needed from api's, and set in the store in order to use in the app
    if (isEmpty(this.props.currLocation)) {
      this.setCurrWeatherByCity(this.state.defaultCity);
    } else this.setCurrWeatherByCity(this.props.currLocation.LocalizedName);

    if (this.state.hasError) this.setState({ isModalOpen: true });
  };

  componentDidCatch(error, errorInfo) {
    // caching any js error
    this.setState({
      hasError: true,
    });
  }

  setCurrWeatherByCity = async (city) => {
    await this.props.getCurrLocation(
      city || this.props.currLocation.LocalizedName
    );
    await this.props.getCurrentWeather(this.props.currLocation?.Key);
    await this.props.get5DaysForecast(this.props.currLocation?.Key);
  };

  toggleFavorites = () => {
    // when clicking on favorites star, call an action to add it to the pavorites array in atore
    // toggle it if exist, cut it from the array and save to the store
    const {
      currLocation,
      currWeather,
      addToFavorites,
      favorites,
      removeFromFavorites,
    } = this.props;
    this.props.history.push("/favorites");
    const newFavorite = weatherService.createFavorite(
      currLocation,
      currWeather
    );
    const isAlreadyExist = this.checkIfCityExistInFavorites();
    isAlreadyExist
      ? removeFromFavorites(newFavorite, favorites)
      : addToFavorites(newFavorite, favorites);
  };

  getStarImgSrc = () => {
    let src;
    if (this.checkIfCityExistInFavorites()) src = fullStar;
    else {
      src = this.state.isHoverStar ? fullStar : emptyStar;
    }
    return src;
  };

  converteFtoC = (numberInF) => {
    return ((numberInF - 32) * (5 / 9)).toFixed(0);
  };

  checkIfCityExistInFavorites = () => {
    return this.props.favorites.some(
      (city) => this.props.currLocation.Key === city.id
    );
  };

  render() {
    const {
      classes,
      currLocation,
      currWeather,
      curr5DaysForecast,
      isTempAsC,
    } = this.props;
    return (
      <div className={classes.homePageContainer}>
        <ActionsBar getNewLocation={this.setCurrWeatherByCity} />

        <div className={classes.mainForecastContainer}>
          <div className={classes.top}>
            <div className={classes.current}>
              <Typography className={classes.textStyle} variant="h5">
                {currLocation.LocalizedName}
              </Typography>
              <CurrWeatherIcon
                temperature={currWeather.Temperature?.Metric.Value}
              />
              {isTempAsC ? (
                <Typography className={classes.textStyle} variant="h5">
                  {currWeather.Temperature?.Metric.Value}&deg;
                  {currWeather.Temperature?.Metric.Unit}
                </Typography>
              ) : (
                <Typography className={classes.textStyle} variant="h5">
                  {currWeather.Temperature?.Imperial.Value}&deg;
                  {currWeather.Temperature?.Imperial.Unit}
                </Typography>
              )}
            </div>
            <div className={classes.favoritesSection}>
              <Typography className={classes.textStyle} variant="h5">
                Add to favorites
              </Typography>
              <img
                className={classes.favoritesStar}
                onClick={() => this.toggleFavorites()}
                src={this.getStarImgSrc()}
                alt="favorites-star"
                width="50px"
                height="50px"
                onMouseEnter={() =>
                  this.setState({
                    isHoverStar: true,
                  })
                }
                onMouseLeave={() =>
                  this.setState({
                    isHoverStar: false,
                  })
                }
              />
            </div>
          </div>
          <div className={classes.middle}>{currWeather?.WeatherText}</div>
          <div className={classes.bottom}>
            <Grid container justify="center" spacing={4}>
              {curr5DaysForecast &&
                curr5DaysForecast.map((day) => (
                  <Grid key={day.EpochDate} item>
                    <Card className={classes.dayCard}>
                      <CardContent className={classes.contentContainer}>
                        <Typography variant="h5" component="h2">
                          {moment(day.Date).format("dddd")}
                        </Typography>
                        <CurrWeatherIcon
                          temperature={this.converteFtoC(
                            day.Temperature.Minimum.Value
                          )}
                        />
                        {isTempAsC ? (
                          <Typography variant="h6">
                            {this.converteFtoC(day.Temperature.Minimum.Value)}-
                            {this.converteFtoC(day.Temperature.Maximum.Value)}
                            &deg;C
                          </Typography>
                        ) : (
                          <Typography variant="h6">
                            {day.Temperature.Minimum.Value}-
                            {day.Temperature.Maximum.Value}
                            &deg;F
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>
        <ErrorModal
          open={this.state.isModalOpen}
          handleClose={() => this.setState({ isModalOpen: false })}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object,
};

const mapStateToPtops = (state) => ({
  locations: state.locationsReducer.locations,
  currWeather: state.weatherReducer.currWeather,
  currLocation: state.locationsReducer.currLocation,
  curr5DaysForecast: state.weatherReducer.curr5DaysForecast,
  favorites: state.favoritesReducer.favorites,
  isTempAsC: state.weatherReducer.isTempAsC,
});

const currComponent = withStyles(styles, { withTheme: true })(HomePage);

export default connect(mapStateToPtops, {
  getCurrLocation,
  getCurrentWeather,
  get5DaysForecast,
  addToFavorites,
  removeFromFavorites,
})(currComponent);
