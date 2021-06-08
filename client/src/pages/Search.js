import React, { useState } from 'react';
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import BookSearch from '../components/BookSearch'
import SearchResultContainer from '../components/SearchResultContainer'
import API from '../utils/API';

function Search() {
    const [bookList, setBookList] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();  
        await getGoogleBooks(event.target.searchField.value);
    }

    const handleSave = async (book) => {
        API.saveBook(book)
          .then(savedBook => {
            const filteredList = bookList.filter((book) => savedBook.data.title !== book.volumeInfo.title);
            setBookList(filteredList);
          })
    }

    const getGoogleBooks = async (search) => {
      await API.searchGoogleForBooks(search)
        .then(data => {
          setBookList([...data.data]);
          });
    };

    return (
        <div className="container">
          <Nav />
          <Hero />
          <BookSearch
            handleSubmit={handleSubmit}
          />
          {bookList.length > 0 &&
            <SearchResultContainer
              handleSave={handleSave}
              bookList={bookList}/>
          }

        </div>
    );
}

export default Search;