import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => {

  return (
    <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`/movies/${movie.id}`}>
      <span className="saved-movie">{movie.title}</span>
      </Link>
    ))}
    <Link to='/'>
    <button className="home-button">Home</button>
    </Link>
  </div>
  )
}

export default SavedList;
