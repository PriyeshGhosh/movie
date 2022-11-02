import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const API_EP = `http://www.omdbapi.com/?apikey=${publicRuntimeConfig.apikey}`;


export const fetchMovies = async (movieName) => {
    return <div>axios.get(`${API_EP}&=${movieName}`);
    
    </div> 
    
};