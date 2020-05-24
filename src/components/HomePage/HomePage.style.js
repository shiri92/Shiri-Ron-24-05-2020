import cyan from "@material-ui/core/colors/cyan";

export const styles = (theme) => ({
  actionsBarContainer: {
    maxWidth: "450px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Balsamiq Sans",
  },
  autocomplete: {
    flex: 1,
    marginRight: "20px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  mainForecastContainer: {
    padding: "40px 30px 60px",
    border: `10px solid ${cyan[700]}`,
    width: "70%",
    margin: "0 auto",
    borderRadius: "10px 20px 30px 40px/30px",
    fontFamily: "Balsamiq Sans",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
  middle: {
    fontSize: "60px",
    margin: "40px 0",
    textAlign: "center",
  },
  dayCard: {
    textAlign: "center",
    width: "160px",
    height: "200px",
    border: "1px solid rgba(0, 0, 0, 0.12)",
  },
  textStyle: {
    fontFamily: "Balsamiq Sans",
  },
  current: {
    border: `5px solid ${cyan[700]}`,
    borderRadius: "5px 10px 15px 30px/30px 15px 10px 5px",
    padding: "20px",
    textAlign: "center",
  },
  contentContainer: {
    height: "calc(100% - 40px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  favoritesSection: {
    textAlign: "center",
  },
  favoritesStar: {
    cursor: "pointer",
  },
});
