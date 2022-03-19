import { getBooksAction } from "../booksReducer"
import { loadMoreAction } from "../booksReducer"

export const fetchBooks = (userInput, currentPage, selectValue, sortingBy) => {
    if (currentPage === 1) {
        return function (dispatch) {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${userInput}+subject:${selectValue}&maxResults=32&startIndex=0&orderBy=${sortingBy}&key=AIzaSyCW9MjIlFfhln6OMvET0lG-48qUHD4uxF0`)
                .then(response => response.json())
                .then(json => dispatch(getBooksAction(json)))
        }
    }
    return function (dispatch) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${userInput}+subject:${selectValue}&maxResults=32&startIndex=${(currentPage * 32) - 1}&key=AIzaSyCW9MjIlFfhln6OMvET0lG-48qUHD4uxF0`)
            .then(response => response.json())
            .then(json => dispatch(loadMoreAction(json)))
    }
}