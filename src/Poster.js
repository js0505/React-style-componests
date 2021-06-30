import React from 'react';
import './Movie.css'


const Poster = ({src, alt}) => {
    return (
        <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt} className={"Movie_Poster"} />
    );
};

export default Poster;