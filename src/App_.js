import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      rate: ""
    }
    this.getData = this.getData.bind(this);
  }

async getData() {
    console.log('get data');
    const result = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    this.setState({ rate: result.data.bpi.USD.rate_float });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.rate}</h1>
        <button className="btn" onClick={this.getData}>
          GET DATA
        </button>
      </div>
    );
  }
}
export default App;