import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { shallow } from "enzyme";

describe("App", () => {
  describe("when the button is clicked", () => {
    const spy = jest.spyOn(App.prototype, "getData");
    const app = shallow(<App />);

    // our mock data is based on the data structure
    // of the CoinDesk API response
    const mockData = { bpi: { USD: { rate_float: 5 } } };

    beforeEach(() => {
      //THIS IS WHERE THE MAGIC HAPPENS
      const mock = new MockAdapter(axios);
      mock
        .onGet("https://api.coindesk.com/v1/bpi/currentprice.json")
        .reply(200, mockData);
      app.find(".btn").simulate("click");
    });

    it("calls the `getData` function", () => {
      app.find(".btn").simulate("click");
      expect(spy).toHaveBeenCalled();
    });

    it("sets the `state.rate` to the bitcoin exchange rate that we    get from the GET request", () => {
      expect(app.state().rate).toEqual(mockData.bpi.USD.rate_float);
    });
  });
});
