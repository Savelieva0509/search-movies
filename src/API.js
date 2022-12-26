import axios from 'axios';
const KEY = `946436ca4073577028dd0f99867a7b5f`

export const getTrending =()=>{
   const response= axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
    console.log(response);
    return response;

}
export const searchMovie = (query)=>{
    const response= axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&page=1`)
    return response
}
export const movieDetails=(id)=>{
    const response = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`)
    return response
   
}
export const movieCredits=(id)=>{
    const response=axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`)
    return response
}
export const movieReviews=(id)=>{
    const response=axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
    return response
}