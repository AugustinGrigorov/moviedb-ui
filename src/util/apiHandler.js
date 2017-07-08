import axios from 'axios'
import config from '../config/local'
const { CancelToken } = axios
const searchState = {}

function searchForMovie (name) {
  if (searchState.unresolved) {
    searchState.cancelRequest()
  }
  return new Promise(function(resolve, reject) {
    if (name) {
      searchState.unresolved = true
      return axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: config.API_KEY,
          query: name
        }, cancelToken: new CancelToken(function executor (cancelRequest) {
          searchState.cancelRequest = cancelRequest
        })
      }).then((response) => {
        searchState.unresolved = false
        resolve(response.data.results)
      }).catch(function(thrown) {
        resolve([])
      });
    } else {
      resolve([])
    }
  });
}

function getMovieDetails (id) {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: config.API_KEY
    }
  }).then((response) => {
    return response.data
  })
}

function getPopularMovies () {
  return axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key: config.API_KEY,
      sort_by: 'popularity.desc'
    }
  }).then((response) => {
    return response.data.results
  })
}

export { searchForMovie, getMovieDetails, getPopularMovies }
