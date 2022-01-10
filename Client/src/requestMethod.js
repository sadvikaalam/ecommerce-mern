import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDkxOTA0NmEzMDA3N2JlODY4NDBmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTc4NTU0NywiZXhwIjoxNjQyMDQ0NzQ3fQ.yT1uHKxwibhbC40-DF2aPCyH997eGAnXo9Xjx6lg5hE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseUrl: BASE_URL,
  header: {token: `Bearer ${TOKEN}` }
});