import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InputContext from '../../context'
import { fetchBooks } from '../../store/asyncAction/fetch'
import BookCard from './BookCard'

export default function Content() {
    const { userInput, currentPage, setCurrentPage } = useContext(InputContext)
    const dispatch = useDispatch()

    const handleLoad = () => {
        setCurrentPage(currentPage + 1)
        // console.log(currentPage)
        dispatch(fetchBooks(userInput, currentPage))
    }
    const books = useSelector(state => state.items)
    const resultsCount = useSelector(state => state.totalItems)
    console.log(resultsCount)

    if (resultsCount) {
        return (
            <>
                <div className='text-center m-4 fw-bold'>found {resultsCount} results</div>
                <div className="d-flex justify-content-center align-items-stretch flex-wrap my-5">
                    {books.map((book, index) =>
                        <BookCard book={book} key={index} />)}
                </div>
                <div className="mx-auto text-center">
                    <button
                        type="button"
                        className="btn btn-info mb-5"
                        onClick={() => handleLoad(151, 2)}
                    >
                        Load More
                    </button>
                </div>
            </>
        )
    }
    return (
        <p className='p-5 ' style={{ height: 600 }}>
            Using Google Books
            Introduction
            This document is intended for developers who want to write applications that can interact with the Books API. Google Books has a mission to digitize the world's book content and make it more discoverable on the Web. The Books API is a way to search and access that content, as well as to create and view personalization around that content.
            If you're unfamiliar with Google Books concepts, you should read Getting Started before starting to code.
            Authorizing requests and identifying your application
            Every request your application sends to the Books API needs to identify your application to Google. There are two ways to identify your application: using an OAuth 2.0 token (which also authorizes the request) and/or using the application's API key. Here's how to determine which of those options to use:
            If the request requires authorization (such as a request for an individual's private data), then the application must provide an OAuth 2.0 token with the request. The application may also provide the API key, but it doesn't have to.
            If the request doesn't require authorization (such as a request for public data), then the application must provide either the API key or an OAuth 2.0 token, or both—whatever option is most convenient for you.
            About authorization protocols
            Your application must use OAuth 2.0 to authorize requests. No other authorization protocols are supported. If your application uses Google Sign-In, some aspects of authorization are handled for you.
            Authorizing requests with OAuth 2.0
            Requests to the Books API for non-public user data must be authorized by an authenticated user.
            The details of the authorization process, or "flow," for OAuth 2.0 vary somewhat depending on what kind of application you're writing. The following general process applies to all application types:
            When you create your application, you register it using the Google API Console. Google then provides information you'll need later, such as a client ID and a client secret.
            Activate the Books API in the Google API Console. (If the API isn't listed in the API Console, then skip this step.)
            When your application needs access to user data, it asks Google for a particular scope of access.
            Google displays a consent screen to the user, asking them to authorize your application to request some of their data.
            If the user approves, then Google gives your application a short-lived access token.
            Your application requests user data, attaching the access token to the request.
            If Google determines that your request and the token are valid, it returns the requested data.
        </p>
    )
}