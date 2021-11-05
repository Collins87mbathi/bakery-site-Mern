import axios from "axios";

export  const axiosInstance = axios.create({
    
    baseUrl : "https://perezbackery.herokuapp.com/",

});