import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8081",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
    withCredentials: true,
});

export default http;
