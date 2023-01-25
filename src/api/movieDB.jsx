import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'fa9139d5b1469605d61adc48ca937251',
        language: 'es-ES',
    },
})

export default movieDB

