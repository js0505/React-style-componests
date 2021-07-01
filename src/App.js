import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';


const App = () => {

  // useState 초기값 틀리면 데이터 안들아옴!
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    await axios
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
      .then(res =>
        setMovie(res.data.results)
        )
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getMovie()
  },[])
  
  return (
    //여기 클래스네임 빼먹으면 CSS 안 동작함
    <div className={"App"}>
      {movie.map(item => (
        <Movie item={item} />
      ))}
    </div>
  );
};

export default App;