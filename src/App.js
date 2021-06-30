import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./App.css"
import Movie from './Movie'


const App = () => {
  
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
    <div className={"App"}>
      {movie.map(item => (
        <Movie item={item} />
      ))}
    </div>
  );
};

export default App;