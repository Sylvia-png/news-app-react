import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from "./component/searchComponent/SearchComponent"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      information: [],
      query: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Hacker News API Search</h1>
        <SearchComponent />
      </div>
    );
  }
}

export default App;