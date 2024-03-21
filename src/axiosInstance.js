import axios from "axios";

// const instance = axios.create({
//     baseURL: "http://localhost:3000"
// })

// cyclic backend 
// const instance = axios.create({
//     baseURL: "https://good-rose-elephant-toga.cyclic.app"
// })

// render backend 
// const instance = axios.create({
//     baseURL: "https://chaokaiqi.onrender.com"
// })

const instance = axios.create({
    baseURL: "https://www.chaokaiqi.com:3000"
})


export default instance