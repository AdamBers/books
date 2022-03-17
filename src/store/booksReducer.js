const GET_BOOKS = 'GET_BOOKS'
const LOAD_MORE = 'LOAD_MORE'

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
        case LOAD_MORE:
            const merged = state.items.concat(action.payload.items)
            return { ...state, items: [...merged] }
        default:
            return state
    }
}

export const getBooksAction = (payload) => (
    { type: GET_BOOKS, payload }
)
export const loadMoreAction = (payload) => (
    { type: LOAD_MORE, payload }
)
