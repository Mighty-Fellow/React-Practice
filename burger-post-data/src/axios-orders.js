import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e65ce.firebaseio.com/'
});

export default instance;