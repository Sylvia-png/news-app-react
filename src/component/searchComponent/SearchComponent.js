import React, { Component } from "react";
class searchComponent extends Component {
  state = {
    news: [],
    query: ''
  };

  onChange = (e) => {
    this.setState({query: e.target.value})
    console.log(this.state.query)
  }

  onSearch = (e) => {
    e.preventDefault()
    fetch("https://hn.algolia.com/api/v1/search?query=" + this.state.query)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        this.setState({ news: response.hits})
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSearch}>
          <input onChange={this.onChange}></input>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h3>Results:</h3>
          {
            this.state.news.map(news => {
              return <p><a href={news.url}>{news.title}</a></p>
            })
          }
        </div>
      </div>
    );
  }
}

export default searchComponent;