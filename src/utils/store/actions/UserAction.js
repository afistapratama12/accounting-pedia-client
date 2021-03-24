import axios from '../../API/axios'
import Swal from 'sweetalert2'

export const registerUser = payload => {
    return async next => {
        try {
            next({ type : 'LOADING' })

            const { data } = await axios({
                method : 'POST',
                url : '/users/register',
                data : payload
            })

            const Toast = Swal.mixin({
                toast : true,
                position : 'top',
                showConfirmButton: false,
                timer: 3000
            })

            Toast.fire({
                icon: 'success',
                title: 'Account created'
            })

            return next({ type : 'REGISTER', payload: data})
        } catch (err) {
            err?.response?.data?.messages ?
                next({ type : 'ERROR', payload: [err.response.data.messages]}) :
                next({ type : 'ERROR', payload: err.response.data.errors})
        }
    }
}

export const loginUser = payload => {
    return async next => {
        try {
            next({ type : 'LOADING'})

            const { data } = await axios({
                method: 'POST',
                url : '/users/login',
                data: payload
            })

            console.log(data, 'masuk login')

            return next({ 
                type : 'LOGIN', 
                payload: data
            })

        } catch (err) {
            next({ type : 'ERROR', payload: err.response.data.messages})
        }
    }
}

export const logout = _ => {
    return async next => {
        try {
            return next({ type : 'LOGOUT'})
        } catch (err) {
            console.log(err)
        }
    }
}

export const getUserById = id => {
    return async next => {
        try {
            next({ type : 'LOADING'})

            const { data } = await axios({
                method: 'GET',
                url : `/users/${id}`
            })

            return next({ type : 'GET_USER_ID', payload: data})

        } catch(err) {
            console.log(err.response)
        }
    }
}

export const editUserProfile = (userId, payload) => {
    return async next => {
        try {
            next({ type : 'LOADING'})

            const { data } = await axios({
                method: 'PATCH',
                url : `/users/${userId}`,
                data: payload,
                headers: {access_token: localStorage.getItem('access_token')}
            })

            return next({ type : 'DONE_EDIT_USER', payload: data})

        } catch(err) {
            console.log(err.response)
        }
    }
}