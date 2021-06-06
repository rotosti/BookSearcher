import React, { useState } from 'react';
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import BookSearch from '../components/BookSearch'
import SearchResultContainer from '../components/SearchResultContainer'

function Search() {
    const [search, setSearch] = useState('');
    const [bookList, setBookList] = useState();

    const handleSubmit = (event) => {
        
        event.preventDefault();

        setSearch(event.target.searchField.value)

        
    }

    return (
        <>
          <Nav />
          <Hero />
          <BookSearch
            handleSubmit={handleSubmit}
          />
          {/* {bookList && */}
            <SearchResultContainer />
          {/* } */}
        </>
    );
}

export default Search;