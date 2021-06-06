import React from 'react';

function BookSearch({handleSubmit}) {
    return(
        <div className='containter'>
            <div className='d-flex flex-column justify-content-center p-4 border border-dark border-1 m-4'>
                <h3>Book Search by Title</h3>
                <form onSubmit={handleSubmit}>
                    <input name='searchField' type="text" className="form-control my-4"></input>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookSearch;