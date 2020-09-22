import React, { useState, useEffect } from 'react';
// import axios from './axios';
import axios from 'axios';
import "./row.css";

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            console.log(request.data.results);
            setMovies(request.data.results)
            return request;
            
        }
        fetchData();
    }, [fetchUrl]);
    

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {/*several row_posters*/}
                {movies.map((movie,i) => (
                    <img
                        className="row_poster"
                        key={'movie_'+i} 
                        src={`${base_url}${movie.poster_path}`} 
                        alt={movie.name} 
                     />
                ))}
            </div>
             {/* container -> posters */}
        </div>
    )
}


export default Row;