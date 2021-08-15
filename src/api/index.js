import axios from "axios";

const API = axios.create({
  baseURL: "https://weather-app-tehila.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getWeatherByCityForSystem = (cities) =>
  API.get(`weather/getWeatherByCityForSystem/${cities}`);

export const signUp = (formData) => API.post("user/signUp", formData);
export const signIn = (formData) => API.post("user/signIn", formData);

export const weatherByCity = (city, userId) =>
  API.get(`user/weatherByCity/${city}/${userId}`);

export const getSearches = (userId) => API.get(`user/getSearches/${userId}`);

export const deletSearch = (userId, searchId) =>
  API.delete(`user/deletSearch/${userId}/${searchId}`);

export const deletAllSearches = (userId) =>
  API.delete(`user/deletAllSearches/${userId}`);
