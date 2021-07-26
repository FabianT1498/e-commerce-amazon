import axios from "axios";

const instance = axios.create({
    baseURL: '...' // THE API (cloud function) URL
})

console.log(instance);

export default instance