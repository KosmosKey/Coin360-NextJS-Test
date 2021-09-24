import React from "react";
import styles from "../styles/styles.module.scss";
import cs from "classnames";
import NumberFormat from "react-number-format";

const Table = ({ data, period }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Symbol</th>
          <th>Price (USD)</th>
          <th>Market Cap</th>
          <th>Circulating Supply</th>
          <th>Change {period}</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(({ ch, em, mc, mcr, p, pb, s, v }, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{s}</td>
              <td className={cs({ [styles.negative]: p < 0 })}>
                <NumberFormat
                  value={p?.toFixed(2)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </td>
              <td className={cs({ [styles.negative]: mc < 0 })}>
                <NumberFormat
                  value={mc?.toFixed(2)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </td>
              <td className={cs({ [styles.negative]: em < 0 })}>
                <NumberFormat
                  value={em?.toFixed(2)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </td>

              <td
                className={cs(styles.lastHour, { [styles.negative]: ch < 0 })}
              >
                <NumberFormat
                  value={ch?.toFixed(2)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"%"}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
