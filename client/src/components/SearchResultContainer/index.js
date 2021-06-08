import React from 'react';
import BookCard from '../BookCard'

function SearchResultContainer({bookList, handleSave}) {
    return (
        <div className='container border border-dark border-1'>
            <h3 className="d-flex flex-column p-3">Results</h3>
            {bookList && bookList.map((book, i) => {
                return <BookCard handleSave={handleSave} key={i} book={book} />
            })}
        </div>
    )
}

export default SearchResultContainer;