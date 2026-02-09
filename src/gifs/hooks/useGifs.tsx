import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gif-by-query.action";
import type { Gif } from "../interface/gifs.interface";

    
    //Cache
    // const gifsCache: Record<string, Gif[]> = {};

    export const useGifs = () => {
    const [gifs,setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async(term: string) => {
        if(gifsCache.current[term]){
            setGifs(gifsCache.current[term]);
            return;
        }
        const gifs = await getGifsByQuery(term);   
        setGifs(gifs);
        gifsCache.current[term] = gifs;       
    };

    const handleSearch = async(query: string = '') => {
        // Función que se ejecuta cuando el usuario busca algo.    
        query = query.trim().toLowerCase();
        // Si el usuario no escribió nada, no hace nada.
        if(query.length === 0) return;
        // Si ya se buscó ese término antes, no lo vuelve a guardar.
        if( previousTerms.includes(query)) return;
        // Guarda el nuevo término al inicio de la lista
        // y limita el historial a un máximo de 7 búsquedas.
        setPreviousTerms([query, ...previousTerms].splice(0,8))    

        const gifs = await getGifsByQuery(query);   
        setGifs(gifs);

        gifsCache.current[query] = gifs;
    };

    return {
        //Values
        gifs,
        previousTerms,
        
        //Methods / Actions
        handleSearch,
        handleTermClicked,
    }
};


