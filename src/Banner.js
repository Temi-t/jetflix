import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from './requests';
import './banner.css';
const base_url = "https://image.tmdb.org/t/p/original/"




function Banner (){
    const[movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[ Math.floor(Math.random() * request.data.results.length-1)]
            );
            return request;
        };
        fetchData();
        }, []);
        console.log(movie)
        console.log(`url(${base_url}${movie?.backdrop_path})`)



    return(
        <header 
        className="banner"
        style={{
            backgroundImage:`url(${base_url}${movie?.backdrop_path})`,
            // backgroundImage: `url( "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}" )`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'}}>


            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_contents">
                <div className='banner_buttons'>
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My list</button>
                </div>
                {/* description */}
                <h1 className="banner_description"> {movie?.overview} </h1>
            </div>

        </header>
    )
}


export default Banner;
