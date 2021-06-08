import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import DBResultsContainer from '../components/DBResultsContainer';
import API from '../utils/API';

function Saved() {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        getBooksInDB();
    }, []) 

    const getBooksInDB = async () => {
        await API.getSavedBooks()
            .then(results => {
                setBookList(results.data);
            })
    };

    console.log(bookList);

    const handleDelete = async (id) => {
        API.removeSavedBook(id)
            .then(data => {
                getBooksInDB();
            })
    }

    return (
        <div className="container">
          <Nav />
          <Hero />
          {bookList.length > 0 &&
            <DBResultsContainer handleDelete={handleDelete} bookList={bookList}/>
          }
          
        </div>
    )

}

export default Saved;