import React from 'react';


//인자를 중괄호로 묶어서 표기해야 정상동작.
const Poster = ({src, alt}) => {
    return (
        <div>
            <img className={"Movie_Poster"} src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt}/>
        </div>
    );
};

export default Poster;