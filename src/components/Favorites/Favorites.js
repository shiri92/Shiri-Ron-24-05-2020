import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./Favorites.style";
import { connect } from "react-redux";
import { getCurrentWeather, setFavorites } from "../../actions/weatherActions";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CurrWeatherIcon from "../CurrWeatherIcon";
import weatherService from "../../services/weatherService";

const Favorites = ({ classes, favorites, isTempAsC }) => {
  useEffect(() => {
    // update in live the current weather from api for each location
    const updatedFavorites = favorites.map(async (city) => {
      const updatedWeather = await weatherService.getCurrentWeather(city.id);
      city.currWeather = updatedWeather[0];
    });

    setFavorites(updatedFavorites);
  });

  return (
    <div className={classes.cardsContainer}>
      <Grid container spacing={2}>
        {favorites.map((city) => (
          <Grid key={city.id} item>
            <Card className={classes.cityCard}>
              <CardContent className={classes.contentContainer}>
                <Typography variant="h5">{city.name}</Typography>
                <CurrWeatherIcon
                  temperature={city.currWeather.Temperature?.Metric?.Value}
                />
                {isTempAsC ? (
                  <Typography variant="h6">
                    {city.currWeather.Temperature?.Metric?.Value}
                    &deg;
                    {city.currWeather.Temperature?.Metric?.Unit}
                  </Typography>
                ) : (
                  <Typography variant="h6">
                    {city.currWeather.Temperature?.Imperial?.Value}
                    &deg;
                    {city.currWeather.Temperature?.Imperial?.Unit}
                  </Typography>
                )}
                <Typography variant="h5">
                  {city.currWeather.WeatherText}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Favorites.propTypes = {
  classes: PropTypes.object,
};

const mapStateToPtops = (state) => ({
  favorites: state.weatherReducer.favorites,
  isTempAsC: state.weatherReducer.isTempAsC,
});

const currComponent = withStyles(styles)(Favorites);

export default connect(mapStateToPtops, { getCurrentWeather, setFavorites })(
  currComponent
);
