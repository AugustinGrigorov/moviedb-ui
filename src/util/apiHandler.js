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

export default searchForMovie
