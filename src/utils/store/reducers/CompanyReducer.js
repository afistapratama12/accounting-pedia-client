const initState = {
    allCompany: null,
    company : null,
    isLoading : false,
    errors : null,

}

const companyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_COMPANY_ID':
            return {...state, company: action.payload}

        case 'INSERT_ALL_COMPANY':
            return {...state, allCompany: action.payload}

        case 'EDIT_COMPANY':
            return {...state, company: action.payload}

        case 'DONE_SALDO_AWAL':
            return {...state }

        case 'FILL_CONTACTS':
            return {...state }

        case 'DONE_FIXED_ASSET':
            return {...state}

        case 'DELETE_COMPANY':
            return {...state, company: null}

        case 'LOADING':
            return {...state, isLoading: true}
        
        case 'ERROR':
            return {...state, errors: action.payload, isLoading: false }

        default:
            return state
    }
}

export default companyReducer