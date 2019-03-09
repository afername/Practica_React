import { movieDbConstants } from '../constants';

const initialState = {};

function getMovies(state = initialState, action) {
  switch (action.type) {
    case movieDbConstants.GETMOVIES_REQUEST:
      return {
        movies: action.movies
      };
    case movieDbConstants.GETMOVIES_SUCCESS:
      return {
        movies: action.movies
      };
    case movieDbConstants.GETMOVIES_FAILURE:
      return {};
    default:
      return state
  }
}

function getMovie(state = initialState, action) {
  switch (action.type) {
    case movieDbConstants.GETMOVIE_REQUEST:
      return {
        movie: action.movie
      };
    case movieDbConstants.GETMOVIE_SUCCESS:
      return {
        movie: action.movie
      };
    case movieDbConstants.GETMOVIE_FAILURE:
      return {};
    default:
      return state
  }
}

function searchMovies(state = initialState, action) {
  switch (action.type) {
    case movieDbConstants.SEARCHMOVIES_REQUEST:
      return {
        searchedMovies: action.searchedMovies
      };
    case movieDbConstants.SEARCHMOVIES_SUCCESS:
      return {
        searchedMovies: action.searchedMovies
      };
    case movieDbConstants.SEARCHMOVIES_FAILURE:
      return {};
    default:
      return state
  }
}

export {
  getMovies,
  getMovie,
  searchMovies
}