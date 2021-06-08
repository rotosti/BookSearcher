import React from 'react';
import DBBookCard from '../DBBookCard';

function DBResultsContainer({bookList, handleDelete}) {
    return (
        <div className='container border border-dark border-1'>
            <h3 className="d-flex flex-column p-3">Saved</h3>
            {bookList && bookList.map((book, i) => {
                return <DBBookCard handleDelete={handleDelete} key={i} book={book} />
            })}
        </div>
    )
}

export default DBResultsContainer;