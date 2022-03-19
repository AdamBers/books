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
            state = defaultState
            return action.payload
        case LOAD_MORE:
            if (action.payload?.items) {
                const merged = state.items.concat(action.payload.items)
                return { ...state, items: [...merged] }
            }
            alert('NO MORE BOOKS AVAILABLE')
            return state
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
