import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/styles.module.scss";
import NavBar from "../components/NavBar";
import Select from "react-select";
import Table from "../components/Table";
import Loader from "react-loader-spinner";

export default function Home() {
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState("24h");
  const [loading, setLoading] = useState(true);

  const fetchCoinData = async () => {
    setLoading(true);
    await axios
      .get(`http://localhost:3000/api?period=${period}`)
      .then((res) => setData(res.data.data.slice(0, 150)))
      .catch((err) => console.log(err.response));
    setLoading(false);
  };

  useEffect(async () => {
    await fetchCoinData();
  }, []);

  const options = [
    { value: "1h", label: "Last 1 Hour" },
    { value: "24h", label: "Last 24 Hours" },
    { value: "7d", label: "Last 7 Days" },
    { value: "30d", label: "Last 30 Days" },
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

  const setNewPeriod = async (e) => {
    setPeriod(e.value);
    await fetchCoinData();
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
          id="period"
          defaultValue={{ value: "1h", label: "Last 1 Hour" }}
          onChange={(e) => setNewPeriod(e)}
          options={options}
          className={styles.select}
          styles={customStyles}
        />
        {loading ? (
          <div className={styles.loaderContainer}>
            <Loader type="TailSpin" color="#fff" height={150} width={150} />
          </div>
        ) : (
          <Table data={data && data} period={period} />
        )}
      </div>
    </div>
  );
}
