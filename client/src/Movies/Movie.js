import React, { useState ,useEffect } from 'react';
import axios from 'axios';

const Movie = props => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(res => {
          setMovie(res.data);
        })
        .catch(error => {
          console.error(error);
        });

  }, []);
  
  const saveMovie = props => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (movie === null) {
    return <div>Loading Movies...</div>
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h3>{title}</h3>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}



export default Movie;
