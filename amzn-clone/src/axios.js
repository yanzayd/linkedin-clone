import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-commerce-76b44/us-central1/api' //THE API (cloud function) URL 
    //'https://us-central1-e-commercer-76b44.cloudfunctions.net/api'
});

export default instance;