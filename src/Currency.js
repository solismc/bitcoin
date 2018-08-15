import React, { Component } from 'react';

class Currency extends Component{

  getIconUrl () {
      if (this.props.icon){
          return `https://s2.coinmarketcap.com/static/img/coins/16x16/${this.props.id}.png`
      } else {
          return ''
      }
  }

  render () {
      return (
          <section>
              <img src={this.getIconUrl()} />
              <h3>{this.props.icon}</h3>
          </section>
      )
  }

}


export default Currency