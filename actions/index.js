//userData
export const updateUserData = data => {
    return {
        type: 'UPDATE_USERDATA',
        payload: data
    }
}

//isLoggedIn
export const updateIsLoggedIn = data => {
    return {
        type: 'UPDATE_ISLOGGEDIN',
        payload: data
    }
}