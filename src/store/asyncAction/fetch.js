import { getBooksAction } from "../booksReducer"
export const fetchBooks = (userInput, currentPage) => {
    
    return function (dispatch) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${userInput}&maxResults=32&startIndex=${currentPage * 30}&key=AIzaSyCW9MjIlFfhln6OMvET0lG-48qUHD4uxF0`)
            .then(response => response.json())
            .then(json => dispatch(getBooksAction(json)))
    }
}