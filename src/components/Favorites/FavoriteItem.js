import React, { useEffect, useState } from "react";
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
import { CSSTransition } from "react-transition-group";
import "./animation.css";

const FavoriteItem = ({ classes, isTempAsC, city }) => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setShowCard(true);
  }, []);

  return (
    <CSSTransition key={city.id} in={showCard} timeout={300} classNames="card">
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
            <Typography variant="h5">{city.currWeather.WeatherText}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </CSSTransition>
  );
};

FavoriteItem.propTypes = {
  classes: PropTypes.object,
};

const mapStateToPtops = (state) => ({
  isTempAsC: state.weatherReducer.isTempAsC,
});

const currComponent = withStyles(styles)(FavoriteItem);

export default connect(mapStateToPtops, { getCurrentWeather, setFavorites })(
  currComponent
);
