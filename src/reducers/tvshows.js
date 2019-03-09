import { movieDbConstants } from '../constants';

const initialState = {};

function getShows(state = initialState, action) {
  switch (action.type) {
    case movieDbConstants.GETSHOWS_REQUEST:
      return {
        shows: action.shows
      };
    case movieDbConstants.GETSHOWS_SUCCESS:
      return {
        shows: action.shows
      };
    case movieDbConstants.GETSHOWS_FAILURE:
      return {};
    default:
      return state
  }
}

function getShow(state = initialState, action) {
  switch (action.type) {
    case movieDbConstants.GETSHOW_REQUEST:
      return {
        show: action.show
      };
    case movieDbConstants.GETSHOW_SUCCESS:
      return {
        show: action.show
      };
    case movieDbConstants.GETSHOW_FAILURE:
      return {};
    default:
      return state
  }
}

function searchShows(state = initialState, action) {
  switch (action.type) {
    case movieDbConstants.SEARCHSHOWS_REQUEST:
      return {
        searchedShows: action.searchedShows
      };
    case movieDbConstants.SEARCHSHOWS_SUCCESS:
      return {
        searchedShows: action.searchedShows
      };
    case movieDbConstants.SEARCHSHOWS_FAILURE:
      return {};
    default:
      return state
  }
}

export {
  getShows,
  getShow,
  searchShows
}