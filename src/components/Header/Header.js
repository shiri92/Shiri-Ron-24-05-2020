import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cyan from "@material-ui/core/colors/cyan";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import sun from "../../icons/sun.svg";

const useStyles = makeStyles(() => ({
  title: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
    textTransform: "none",
    fontFamily: "Balsamiq Sans",
    marginLeft: "15px",
  },
  titleIcon: {
    width: "30px",
    height: "30px",
    marginLeft: "15px",
  },
  textStyle: {
    fontFamily: "Balsamiq Sans",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" style={{ background: cyan[700] }}>
        <Toolbar>
          <div className={classes.title}>
            <Typography variant="h5" className={classes.textStyle}>
              Weather App
            </Typography>
            <img src={sun} className={classes.titleIcon} alt="header-icon" />
          </div>
          <Typography variant="h6">
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/favorites" className={classes.link}>
              Favorites
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  theme: PropTypes.object,
};

export default withStyles({}, { withTheme: true })(Header);
