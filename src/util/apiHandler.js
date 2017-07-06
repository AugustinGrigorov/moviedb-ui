import axios from 'axios'
import config from '../config/local'

function searchForMovie (name) {
  return axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: config.API_KEY,
      query: name
    }
  }).then((response) => {
    return response.data.results
  })
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
