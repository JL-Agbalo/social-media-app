import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { SearchIcon } from '../Icon/Icons';
import './Search.css'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Pass the search query to the parent component
  };

  return (
    <form onSubmit={handleSearch}>
      <InputGroup className="mb-3">
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-pill" // Rounded input field
        />
        <InputGroup.Text
          className="bg-transparent border-0 cursor-pointer" 
          onClick={handleSearch} 
        >
          <SearchIcon />
        </InputGroup.Text>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
