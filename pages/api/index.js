import axios from "axios";

export default async (req, res) => {
  if (req.method === "GET") {
    const response = await axios.get(
      `https://coin360.com/api/coins?currency=USD&updates_from=1629894793&period=${req.query.period}&no_charts=true`
    );

    res.send(response.data);
  } else {
    res.json({ message: "This was not the right method!" });
  }
};
