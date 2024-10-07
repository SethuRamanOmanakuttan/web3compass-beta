// src/components/Commune/CommuneSearch.js
import React, { useState } from "react";

const CommuneSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className='mb-8 flex'>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search communities by name or city'
        className='retro-input flex-grow'
      />
      <button type='submit' className='retro-button ml-4'>
        Search
      </button>
    </form>
  );
};

export default CommuneSearch;
