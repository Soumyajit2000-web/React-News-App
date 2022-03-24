import axios from "axios";

const apiKey = "714901628e3f4bf9854c64153ff306cc";
const baseUrl = "https://newsapi.org/v2";

const apiInstance = axios.create({
    baseURL: baseUrl
})

export const getTopHeadlines = async() => {
    let country = "in";
    return await apiInstance.get(`/top-headlines?country=${country}&apiKey=${apiKey}`)
}