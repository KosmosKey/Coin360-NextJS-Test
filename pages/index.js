import axios from "axios";
import { useEffect } from "react";
import styles from "../styles/styles.module.scss";
import { getCoinsData } from "../api";
import NavBar from "../components/NavBar";
import Select from "react-select";

export default function Home() {
  useEffect(async () => {
    const data = await axios
      .get(
        "https://coin360.com/api/coins/custom?currency=USD&updates_from=1629895226&period=24h&start=1610443814&end=1624613414&no_charts=true"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
    }),
  };

  return (
    <div className={styles.overview}>
      <NavBar />
      <div className={styles.mainContent}>
        <div className={styles.mainTitle}>
          <h1>Welcome To Coin360</h1>
          <p>Choose from dropdown to display coins</p>
        </div>
        <Select
          value={"123"}
          onChange={(e) => console.log(e)}
          options={options}
          className={styles.select}
          styles={customStyles}
        />
      </div>
    </div>
  );
}
