import {fetchWithTimeout} from "src/services.js"

export function fetchMovies(){
    const movies = require('src/data/movies.json');
    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction);
} 

const moviePromise = fetchMovies();
moviePromise.then(function(results){
    console.log(results);
})