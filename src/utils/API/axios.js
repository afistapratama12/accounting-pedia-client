import axios from 'axios'

const initAxios = axios.create({
    baseURL : 'https://accounting-pedia-server.herokuapp.com/'
})


export default initAxios