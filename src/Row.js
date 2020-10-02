import React, { useState, useEffect } from 'react';
import axios from './axios';
// import axios from 'axios';
import "./row.css";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results);
            setMovies(request.data.results)
            return request; 
        }

        fetchData();
    }, [fetchUrl]);
    

    /*Recommended height:270 width: 480 for 16:9 players*/
    const opts = {
        height: '390', 
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    //some the movie trailers cannot be found because there are no videos of them on youTube to be searched for
    const handleClick = (movie) =>{
        if(trailerUrl) {
            setTrailerUrl('');
        } else{
            movieTrailer( movie?.name || movie?.original_name || movie?.title || movie?.original_title || " " )
            .then(url => {
                // console.log("New URL: " + new URL(url).search)          ===>   New URL: ?v=ct5mQYE3Xk4
    
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch(error=> console.log(error))
        }
    }
        

    return(
        <div className="row">
            <h2 className="title"> {title} </h2>
            <div className="row_posters" >
                {movies.map((movie,i) => (
                    <img
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        // className={`${style.row_poster} ${isLargeRow && style.row_posterLarge}`}
                        key={'movie_'+i} 
                        src={ `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                        alt={movie.name} 
                        onClick={()=> handleClick(movie)}
                     />
                    //  ,console.log(`NAME:${movie?.name},   ORIGINAL NAME:${movie?.original_name},  TITLE:${movie?.title}, ORIGINAL_TITLE:${movie?.original_title}, 'nil'`)
                ))}
            </div>
             {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}


export default Row;