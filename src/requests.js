const API_KEY = "f2556456b7857fa3a4ba41804346890e";

const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAnime: `discover/movie?api_key=${API_KEY}&with_genres=16`,
    // fetchTrial1: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1`
    fetchTrial1: `discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US&include_adult=true&include_video=true`

}


export default requests;