import axios from "axios"
import { useEffect, useState } from "react"
import { Platform } from "react-native"
import movieDB from "../api/movieDB"


export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState([])
    // const [peliculasPopulares, setPeliculasPopulares] = useState([])


    const getMovies = async () => {

        // if(Platform.OS === 'ios'){
        //     console.log('taking ios fetch; ')
        //     // axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=fa9139d5b1469605d61adc48ca937251&language=es-ES')
        //     // .then(resp => console.log(resp))
        //     // .catch(error => console.log(error))
        //     axios({
        //         method: 'get',
        //         url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=fa9139d5b1469605d61adc48ca937251&language=es-ES',
        //         data: {},
        //         withCredentials: false,
        //         proxy: {
        //             protocol: 'https',
        //         }
        //     })
        //         .then(function (response){
        //             console.log(response)
        //         })
        // }
        const nowPlayingPromise = movieDB.get('/now_playing')
        const popularPromise = movieDB.get('/popular')
        const topRatedPromise = movieDB.get('/top_rated')
        const upcomingPromise = movieDB.get('/upcoming')

        const resp = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise])
        
        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results,
        })

        setIsLoading(false)
    }



    useEffect(() => {
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading
    }

}
