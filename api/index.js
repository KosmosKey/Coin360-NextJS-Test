import axios from "axios";

export const getCoinsData = () =>
  axios.get(
    "https://coin360.com/api/coins/custom?currency=USD&updates_from=1629895226&period=custom&start=1610443814&end=1624613414&no_charts=true "
  );
