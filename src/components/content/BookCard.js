import React from 'react'
import { Link } from 'react-router-dom'


const BookCard = ({ book }) => {
    return (
        <>

            <div className='d-flex align-top m-2 p-3 flex-column justify-content-between shadow-lg bg-white rounded text-wrap' style={{ width: 250 }}>
                <div className='text-break'>
                    {book?.volumeInfo?.imageLinks?.thumbnail ?
                        <Link to='/item' book={{ book }}><img src={book.volumeInfo.imageLinks.thumbnail} alt="icon" className='mx-auto d-block m-3 shadow-lg' style={{ height: 200, width: 150 }} /></Link>
                        : <div className='mx-auto d-block m-3' style={{ height: 200 }}></div>
                    }

                    {book?.volumeInfo?.categories
                        ? <p className='p-3 text-decoration-underline' style={{ height: 25 }}>{book.volumeInfo.categories}</p>
                        : <p className='p-3' style={{ height: 25 }}></p>
                    }
                    {book?.volumeInfo?.title
                        ? <p className='p-2 fw-bold '>{book.volumeInfo.title}</p>
                        : <p className='p-2 fw-bold '></p>
                    }
                </div>
                <div>
                    {book?.volumeInfo?.authors
                        ? <span className='text-muted'>
                            {book.volumeInfo.authors.map((author, index) =>
                                <span key={index}>
                                    {author}
                                    {book.volumeInfo.authors.length - 1 > index
                                        ? <span>, </span>
                                        : <span></span>
                                    }
                                </span>)}
                        </span>
                        : <span className='text-muted'></span>
                    }
                </div>
            </div >
        </>
    )

}
export default BookCard