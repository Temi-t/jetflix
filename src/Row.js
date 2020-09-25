import React, { useState, useEffect } from 'react';
// import axios from './axios';
import axios from 'axios';
import "./row.css";
import YouTube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results);
            setMovies(request.data.results)
            return request;
            
        }
        fetchData();
    }, [fetchUrl]);
    
    const opts = {
        height: '390',
        width: '100',
        playerVars: {
            autoplay: 1,
        },
    };

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
                     />
                ))}
            </div>
             <YouTube videoId='QOD_ZsSc9Zc' opts={opts}   />
        </div>
    )
}


export default Row;