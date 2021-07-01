import React from 'react';
import "./Movie.css";
import Poster from './Poster';
import LinesEllipsis from 'react-lines-ellipsis';

// App.js에서 movie state의 props로 데이터를 받아서 
// 포스터, 제목, 장르 등의 필요한 데이터를 가공하는 컴포넌트

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
                {/* <span>{item.overview.slice(0, 200)} ...</span> */}
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