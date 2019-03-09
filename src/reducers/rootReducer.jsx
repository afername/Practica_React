import { combineReducers } from 'redux';
import { getShows, getShow, searchShows } from './tvshows';
import { getMovies, getMovie, searchMovies } from './movies';

const rootReducer = combineReducers({
    getShows,
    getMovies,
    getMovie,
    getShow,
    searchMovies,
    searchShows
  });
  
  export default rootReducer;