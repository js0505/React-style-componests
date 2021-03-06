import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';
import Poster from './Poster';



const Movie = ({item}) => {
  return (
    <div className={"Movie"}>
      <div className={"Movie_Column"}>
          <Poster src={item.poster_path} alt={item.title} />
      </div>

      <div className={"Movie_Column"}>
        <h1>{item.title}</h1>
        <div className={"Movie_Genres"}>
          {item.genre_ids.map(genre => (
            <span className={"Movie_Genre"}>{genre}</span>
          ))}
        </div>
        <div className={"Movie_Overview"}>
        {/* LinesEllipsis 사용시에 props 대소문자 구별 주의! */}
            <LinesEllipsis 
              text={item.overview}
              maxLine='3'
              ellipsis='...'
              trimRight
              basedOn='letters'
            />
        </div>
      </div>
    </div>
  );
};

export default Movie;