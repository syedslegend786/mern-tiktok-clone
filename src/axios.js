import axios from 'axios';
const instance = axios.create({
    baseURL: ' https://tiktok-backbone.herokuapp.com'
})
export default instance;