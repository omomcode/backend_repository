import axios from "axios";

export const makeRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CMS_UPLOAD_URL,
    headers: {
        Authorization: "bearer " + process.env.NEXT_PUBLIC_CMS_API_TOKEN,
    },
});