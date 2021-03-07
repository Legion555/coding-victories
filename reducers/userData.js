const userDataReducer = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_USERDATA':
            return action.payload;
        default:
            return state;
    }
}

export default userDataReducer