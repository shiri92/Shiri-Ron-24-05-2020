import React from "react";
import PropTypes from "prop-types";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import sunCloud from "../icons/sun-cloud.svg";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";

const CurrWeatherIcon = ({ temperature }) => {
  const getIcon = () => {
    let iconComponent;
    if (temperature < 15) iconComponent = <CloudOutlinedIcon />;
    else if (temperature > 15 && temperature < 20)
      iconComponent = (
        <img src={sunCloud} width="25px" height="25px" alt="sun-cloud" />
      );
    else if (temperature > 20) iconComponent = <WbSunnyOutlinedIcon />;
    return iconComponent;
  };
  return <>{getIcon()}</>;
};

CurrWeatherIcon.propTypes = {
  classes: PropTypes.object,
};

export default CurrWeatherIcon;
