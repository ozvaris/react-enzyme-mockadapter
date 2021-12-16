import React, { Component, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [rate, setRate] = useState("");

  const getData = async () => {
    console.log("get data");
    const result = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    setRate({ rate: result.data.bpi.USD.rate_float });
  };

  return (
    <div className="App">
      <h1>{rate}</h1>
      <button className="btn" onClick={getData}>
        GET DATA
      </button>
    </div>
  );
};

export default App;
