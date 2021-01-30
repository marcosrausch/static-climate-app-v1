import React from 'react';

export default function SearchBar(props) {
  return (
    <div>
      <input
      placeholder="search..."
      type="text" />
      <button onClick={props.onSearch}>
        Search
      </button> <br />
    </div>
  )
};