import { movieDbConstants } from '../constants';
import { showDbService } from '../services';

function getShows() {
  return dispatch => {
      dispatch(request());

      showDbService.getTopShows()
          .then(
            shows => dispatch(success(shows)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: movieDbConstants.GETSHOWS_REQUEST } }
  function success(shows) { return { type: movieDbConstants.GETSHOWS_SUCCESS, shows } }
  function failure(error) { return { type: movieDbConstants.GETSHOWS_FAILURE, error } }
}

function getShowById(id) {
  return dispatch => {
      dispatch(request());

      showDbService.getShowById(id)
          .then(
            show => dispatch(success(show)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: movieDbConstants.GETSHOW_REQUEST } }
  function success(show) { return { type: movieDbConstants.GETSHOW_SUCCESS, show } }
  function failure(error) { return { type: movieDbConstants.GETSHOW_FAILURE, error } }
}

function searchShows(query) {
  return dispatch => {
    dispatch(request());

    showDbService.searchShows(query)
      .then(
        searchedShows => dispatch(success(searchedShows)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: movieDbConstants.SEARCHSHOWS_REQUEST } }
  function success(searchedShows) { return { type: movieDbConstants.SEARCHSHOWS_SUCCESS, searchedShows } }
  function failure(error) { return { type: movieDbConstants.SEARCHSHOWS_FAILURE, error } }
}

export const showsActions = {
  getShows,
  getShowById,
  searchShows
};