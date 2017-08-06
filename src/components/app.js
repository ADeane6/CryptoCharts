import React, { Component } from 'react';

//components, Containers
import SearchBar from '../containers/search_bar'
import PriceList from '../containers/price_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PriceList />
      </div>
    );
  }
}
