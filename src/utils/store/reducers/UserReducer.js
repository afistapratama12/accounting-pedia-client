const initState = {
    user : null,
    access_token : '',
    isLoading : false,
    errors : null,
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {...state, user: action.payload, isLoading: false }

        case 'LOGIN':
            localStorage.setItem('username', action.username)
            localStorage.setItem('id', action.id)
            localStorage.setItem('access_token', action.access_token)
            return {...state, access_token: action.payload, isLoading: false }
        
        case 'LOGOUT':
            localStorage.removeItem('username')
            localStorage.removeItem('id')
            localStorage.removeItem('access_token')
            return { ...state, access_token: '', user: null } 
        
        case 'GET_USER_ID':
            return {...state, user: action.payload}

        case 'DONE_EDIT_USER':
            return {...state, user: action.payload}

        case 'LOADING':
            return {...state, isLoading: true}
        
        case 'ERROR':
            return {...state, errors: action.payload, isLoading: false }

        default:
            return state
    }
}

export default userReducer