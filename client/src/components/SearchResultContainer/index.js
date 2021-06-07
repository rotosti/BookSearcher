import React from 'react';
import BookCard from '../BookCard'

function SearchResultContainer(bookList) {
    return (
        <div className='container border border-dark border-1'>
            <h3 className="d-flex flex-column p-3">Results</h3>
            {

            }
            {bookList && bookList.map(book => {
                return <BookCard book={book} />
            })}
        </div>
    )
}

export default SearchResultContainer;