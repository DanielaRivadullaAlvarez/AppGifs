import axios from "axios";

export const giphyApi = axios.create({
     // Base de todas mis peticiones http que salgan de esta API

    baseURL:'https://api.giphy.com/v1/gifs',
    params:{
        lang:'es',
        api_key: import.meta.env.VITE_GIPHY_API_KEY,
    },
});