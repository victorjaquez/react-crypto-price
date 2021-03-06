import React, { Component } from "react";
import "./App.css";
import axios from "axios";
var NumberFormat = require("react-number-format");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD"
      )
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      });
  }

  render() {
    return (
      <div className="App">
        {Object.keys(this.state.cryptos).map(key => (
          <div id="crypto-container">
            <div classname="left">{key}</div>
            <div classname="right">
              <NumberFormat
                value={this.state.cryptos[key].USD}
                displayType={"text"}
                decimalPrecison={2}
                thousandSeparator={true}
                prefix={"$"}
              />{" "}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
