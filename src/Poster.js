import React from 'react';
import './Movie.css'


// 포스터 데이터가 파일명만 존재해서 다른 url에 입력해서 받아와야 하므로 
// 컴포넌트로 따로 분리.
const Poster = ({src, alt}) => {
    return (
        <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt} className={"Movie_Poster"} />
    );
};

export default Poster;