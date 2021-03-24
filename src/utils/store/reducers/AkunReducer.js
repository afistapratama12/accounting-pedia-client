const initState = {
    allAkun: null,
    akun : null,
    isLoading : false,
    errors : null,

}

const akunReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_AKUN_ID':
            return {...state, akun: action.payload}

        case 'INSERT_AKUNS':
            return {...state, allAkun: action.payload}

        case 'EDIT_AKUN':
            return {...state, akun: action.payload}

        case 'DELETE_AKUN':
            return {...state, akun: null}

        case 'LOADING':
            return {...state, isLoading: true}
        
        case 'ERROR':
            return {...state, errors: action.payload, isLoading: false }

        default:
            return state
    }
}

export default akunReducer