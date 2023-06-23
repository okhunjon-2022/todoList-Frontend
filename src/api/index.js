import axios from "axios";

const mainUrl=axios.create({
    baseURL:"http://localhost:4000"
})
export default mainUrl