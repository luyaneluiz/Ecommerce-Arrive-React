import axios from "axios"

// Para rodar: json-server --watch db.json
// export const api = axios.create({
//     baseURL: "http://localhost:3000",
// })

export const api = axios.create({
    baseURL: "http://localhost:3002",
})
