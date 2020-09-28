import React from "react";

const Navigation = ({ handleFormChange, searchTerm, searchTitles }) => {
  
  return (
      <form onSubmit={searchTitles}>
      <h1>The News</h1>
        <label htmlFor="sortBy">Sort: </label>
        <select id="sortBy" onChange={handleFormChange}>
          <option value="date">Recent</option>
          <option value="author">Author</option>
          <option value="popular">Popular</option>
        </select>
        <br />
        <label htmlFor="searchTerm">Search: </label>
        <input
          id="searchTerm"
          value={searchTerm}
          type="text"
          onChange={handleFormChange}
        ></input>
        <button type="submit">Go</button>
      </form>
  );
};

export default Navigation;