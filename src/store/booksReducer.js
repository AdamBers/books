const GET_BOOKS = 'GET_BOOKS'


const defaultState = {
    userInput: 'Asds'
}

export const booksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            // const newState = { ...action.payload }
            return { state, ...action.payload }
        default:
            return state
    }
}

export const getBooksAction = (payload) => ({ type: GET_BOOKS, payload })

