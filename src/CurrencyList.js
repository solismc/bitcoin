import React, { Component } from "react";

class CurrencyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "loading...",
      icon: "image",
      symbol: "",
      stockprice: "",
      lastUpdateTime: new Date()
    };
  }

  componentDidMount() {
    const _url = `https://api.coinmarketcap.com/v2/ticker/?limit=20`;
    fetch(_url)
      .then(resp => resp.json())
      .then(newCurrencyData => {
        console.log(newCurrencyData);
        const _coins = Object.values(newCurrencyData.data);
        console.log(_coins);
        this.setState({
          //name,
          //symbol,
          //icon,
          lastUpdateTime: new Date()
        });
      });
  }

  render() {
    return (
      <div>
        This is the current stock price for the following Cryptocurrencies:
        <div>
          < currency name={this.state.name} symbol={this.state.symbol} icon={this.state.icon} />
        </div>
        <h4>last updated at {this.state.lastUpdateTime.toLocaleString()}</h4>
      </div>
    );
  }
}

export default CurrencyList
