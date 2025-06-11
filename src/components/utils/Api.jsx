import axios from "axios";

const mainApi = axios.create({

baseURL:"https://bharat-backend.onrender.com"

})

export const postApi = (data) =>{

    return mainApi.post('/api/v1/contact',data)
}