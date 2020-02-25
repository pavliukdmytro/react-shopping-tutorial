const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch(action.type) {
    case 'ADD_BOOK':
        return {
            ...state,
            items: [
                ...state.items,
                action.payload
            ]
        };
    case 'REMOVE_BOOK': {
        return {
            ...state,
            items: state.items.filter((book) => book.id !== action.payload.id)
        }
    }
    default:
        return state;
    }
}