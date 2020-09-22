const API_KEY = "f2556456b7857fa3a4ba41804346890e";


// const requests ={
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}$language=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}$with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetcthActionMovies: `discover/movie?api_key=${API_KEY}$with_genres=28`,
//     fetcthComedyMovies: `discover/movie?api_key=${API_KEY}$with_genres=35`,
//     fetcthHorrorMovies: `discover/movie?api_key=${API_KEY}$with_genres=27`,
//     fetcthRomanceMovies: `discover/movie?api_key=${API_KEY}$with_genres=10749`,
//     fetcthDocumentaries: `discover/movie?api_key=${API_KEY}$with_genres=99`,
// }


const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetcthActionMovies: `discover/movie?api_key=${API_KEY}$with_genres=28`,
    fetcthComedyMovies: `discover/movie?api_key=${API_KEY}$with_genres=35`,
    fetcthHorrorMovies: `discover/movie?api_key=${API_KEY}$with_genres=27`,
    fetcthRomanceMovies: `discover/movie?api_key=${API_KEY}$with_genres=10749`,
    fetcthDocumentaries: `discover/movie?api_key=${API_KEY}$with_genres=99`,
}

export default requests;
// https://api.themoviedb.org/3/trending/all/week?api_key=f2556456b7857fa3a4ba41804346890e$language=en-US