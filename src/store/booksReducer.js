const GET_BOOKS = 'GET_BOOKS'

const defaultState = {
    kind: '',
    totalItems: 0,
    items: []
}

export const booksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            // const newItems = [...state.items, ...action.payload.items]
            // state.items = newItems
            // state.totalItems= action.payload.totalItems
            // console.log(state)
            return action.payload
        default:
            return state
    }
}

export const getBooksAction = (payload) => (
    { type: GET_BOOKS, payload }
)
