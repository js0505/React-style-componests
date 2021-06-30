import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./App.css"

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
       <div className={"Movie"}>
         <div className={"Movie_Column"}>

         </div>
         <div className={"Movie_Column"}>
           <h1>{item.title}</h1>
           <div className={"Movie_Genres"}>
             {item.genre_ids.map(genre => (
               <h5 className={"Movie_Genre"}>{genre}</h5>
              ))}
           </div>
           <div className={"Movie_Overview"}>
             <span>{item.overview.slice(0, 200)} ...</span>
           </div>
         </div>
       </div> 
      ))}
    </div>
  );
};

export default App;