import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TablePage.css";

const url =
  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";

function TablePage() {
  const [dataInput, setDataInput] = useState({});

  const fetchAPI = async () => {
    const resp = await axios.get(url);
    const data = await resp.data["Time Series (5min)"];
    return data;
  };

  useEffect(() => {
    fetchAPI().then((resp) => setDataInput(resp));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="tableHeader">Date Time</th>
            <th className="tableHeader">Open</th>
            <th className="tableHeader">High</th>
            <th className="tableHeader">Low</th>
            <th className="tableHeader">Close</th>
            <th className="tableHeader">Volume</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(dataInput).map((item, index) => {
            let array1 = Object.values(dataInput[item]);
            return (
              <tr key={index}>
                <td className="tableHeader">{item}</td>
                <td className="tableHeader">{array1[0]}</td>
                <td className="tableHeader">{array1[1]}</td>
                <td className="tableHeader">{array1[2]}</td>
                <td className="tableHeader">{array1[3]}</td>
                <td className="tableHeader">{array1[4]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;
