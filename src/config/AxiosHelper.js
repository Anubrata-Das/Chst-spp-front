import axios from "axios";

export const baseURL="http://localhost:8181";
export const httpClient = axios.create({
    baseURL:baseURL,
})