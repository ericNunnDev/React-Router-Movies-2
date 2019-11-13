import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => {

  return (
    <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`}>
      <button className="saved-movie">{movie.title}</button>
      </NavLink>
    ))}
    <NavLink to='/'>
    <button className="home-button">Home</button>
    </NavLink>
  </div>
  )
}

export default SavedList;
