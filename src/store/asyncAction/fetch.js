import { getBooksAction } from "../booksReducer"
import { loadMoreAction } from "../booksReducer"

export const fetchBooks = (userInput, currentPage) => {
    // console.log(currentPage)
    if (currentPage === 1) {
        return function (dispatch) {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${userInput}&maxResults=32&startIndex=0&orderBy=newest&key=AIzaSyCW9MjIlFfhln6OMvET0lG-48qUHD4uxF0`)
                .then(response => response.json())
                .then(json => dispatch(getBooksAction(json)))
        }
    }
    return function (dispatch) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${userInput}&maxResults=32&startIndex=${(currentPage - 1) * 32}&key=AIzaSyCW9MjIlFfhln6OMvET0lG-48qUHD4uxF0`)
            .then(response => response.json())
            .then(json => dispatch(loadMoreAction(json)))
    }
}