import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./Favorites.style";
import { connect } from "react-redux";
import { getCurrentWeather, setFavorites } from "../../actions/weatherActions";
import Grid from "@material-ui/core/Grid";
import weatherService from "../../services/weatherService";
import FavoriteItem from "./FavoriteItem";

const Favorites = ({ classes, favorites }) => {
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
          <FavoriteItem key={city.id} city={city} />
        ))}
      </Grid>
    </div>
  );
};

Favorites.propTypes = {
  classes: PropTypes.object,
  favorites: PropTypes.array,
};

const mapStateToPtops = (state) => ({
  favorites: state.weatherReducer.favorites,
});

const currComponent = withStyles(styles)(Favorites);

export default connect(mapStateToPtops, { getCurrentWeather, setFavorites })(
  currComponent
);
