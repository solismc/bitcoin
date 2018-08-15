import React, { Component } from "react";
import Currency from "./Currency";

class CurrencyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      lastUpdateTime: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const _url = `https://api.coinmarketcap.com/v2/ticker/?limit=20`;
      fetch(_url)
        .then(resp => resp.json())
        .then(newCurrencyData => {
          console.log(newCurrencyData);
          const _coins = Object.values(newCurrencyData.data);
          console.log(_coins);
          this.setState({
            coins: _coins
          });
        });
    }, 1000);
  }

  render() {
    return (
      <div>
        This is the current stock price for the following{" "}
        {this.state.coins.length} Cryptocurrencies:
        {/* < currency name={this.state.name} symbol={this.state.symbol} icon={this.state.icon} /> */}
        {this.state.coins.map((coin, idx) => {
          return (
            <Currency
              key={idx}
              name={coin.name}
              id={coin.id}
              symbol={coin.symbol}
            />
          );
        })}
        <h4>last updated at {this.state.lastUpdateTime.toLocaleString()}</h4>
      </div>
    );
  }
}

export default CurrencyList;
