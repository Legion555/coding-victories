const victoriesReducer = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_VICTORIES':
            return action.payload;
        default:
            return state;
    }
}

export default victoriesReducer