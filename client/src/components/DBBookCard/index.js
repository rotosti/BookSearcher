import React from 'react';

function DBBookCard({book, handleDelete}) {
    return (
    <div className="col-12" >
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">{book.title}</h3>
                <div className="mb-1 text-muted">{book.authors}</div>
                <p className="card-text mb-auto">{book.description}</p>
                <button><a href={book.link} className="p-2">View</a></button>
                <button className="mt-3" onClick={() => handleDelete(book._id)}>Delete</button>
            </div>
            <div className="col-auto d-none d-lg-block">
                <img src={book.image} width="200" height="250" alt='a book cover' />
            </div>
        </div>
    </div>
    )
}

export default DBBookCard;