import React, { useState } from 'react';
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import BookSearch from '../components/BookSearch'
import SearchResultContainer from '../components/SearchResultContainer'
import API from '../utils/API';

function Search() {
    // const [search, setSearch] = useState();
    const [bookList, setBookList] = useState();

    const handleSubmit = async (event) => {
        
        event.preventDefault();
        console.log(event.target.searchField.value)
        // setSearch(event.target.searchField.value);
        // console.log(search);
        await getGoogleBooks(event.target.searchField.value);
        // if (search !== '') {
        //   getGoogleBooks(search);
        // }
        
    }

    const getGoogleBooks = async (search) => {
      await API.searchGoogleForBooks(search)
        .then(data => {
          setBookList(data);
          console.log(bookList)});

    }

    return (
        <>
          <Nav />
          <Hero />
          <BookSearch
            handleSubmit={handleSubmit}
          />
          {/* {bookList &&
            <SearchResultContainer bookList={bookList}/>
          } */}
        </>
    );
}

export default Search;