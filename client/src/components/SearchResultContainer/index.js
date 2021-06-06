import React from 'react';
import BookCard from '../BookCard'

function SearchResultContainer() {
    return (
        <div className='container border border-dark border-1'>
            <h3 className="d-flex flex-column p-3">Results</h3>
            <BookCard />
        </div>
    )
}

export default SearchResultContainer;