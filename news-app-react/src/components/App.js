import React from "react";
import News from "./News";
import Navigation from "./Navigation";
import { comparePopular, compareDate, compareAuthor } from "../comparisons";

class App extends React.Component {
  state = {
    news: [],
    searchTerm: "",
    sortBy: "date"
  };

  //fetch API
  componentDidMount() {
    fetch(`http://hn.algolia.com/api/v1/search?query=...`)
      .then(res => res.json())
      .then(json => this.setState({ news: json.hits }))
      .catch(err => console.log("Error!: ", err));
  }

  // fetchData
  fetchData = x => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${x}&tags=story`)
      .then(res => res.json())
      .then(json => this.setState({ news: json.hits }))
      .catch(err => console.log("Error!: ", err));
  };

  // updates state.searchTerm
  handleFormChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // feed searchTerm into fetch API to return data
  searchTitles = e => {
    e.preventDefault();
    let { searchTerm } = this.state;
    this.fetchData(searchTerm);
  };

  render() {
    if (this.state.news.length === 0) {
      return <p className="loading">Loadin</p>;
    }

    // uses comparisons to sort state.articles array according to state.sortBy
    let { sortBy, news, searchTerm } = this.state;
    if (sortBy === "date") {
      console.log("Sort date", searchTerm);
      news.sort(compareDate);
    } else if (sortBy === "author") {
      console.log("Sort author", searchTerm);
      news.sort(compareAuthor);
    } else if (sortBy === "popular") {
      console.log("Sort popular", searchTerm);
      news.sort(comparePopular);
    }
    return (
      <div>
        <Navigation
          searchTitles={this.searchTitles}
          handleFormChange={this.handleFormChange}
          searchTerm={this.state.searchTerm}
        />
        <ul>
          {news.map((post, index) => (
            <News key={post.objectID} postData={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;