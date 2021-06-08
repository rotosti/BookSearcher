import React from 'react';

function BookCard({book, handleSave}) {
    return (
    <div className="col-12">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">{book.volumeInfo.title}</h3>
                <div className="mb-1 text-muted">{book.volumeInfo.authors}</div>
                <p className="card-text mb-auto">{book.volumeInfo.description}</p>
                <button><a href={book.volumeInfo.infoLink} className="p-2">View</a></button>
                <button className="mt-3" onClick={() => handleSave(book)}>Save</button>
            </div>
            <div className="col-auto d-none d-lg-block">
                <img src={book.volumeInfo.imageLinks.thumbnail} width="200" height="250" alt='a book cover' />
            </div>
        </div>
    </div>
    )
}

export default BookCard;