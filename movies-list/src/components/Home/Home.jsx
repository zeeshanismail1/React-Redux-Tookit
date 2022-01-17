import React, { useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MoviesSlice'
import { useDispatch } from 'react-redux'
import './Home.scss'

const Home = () => {    
        const dispatch = useDispatch();
        const movieText = "Harry";
        const showText = "Friends";
        useEffect(() => {
            dispatch(fetchAsyncMovies(movieText));
            dispatch(fetchAsyncShows(showText));
        },[dispatch]);

    return (
        <div>
            <div className="banner-img">
                <div>
                    <MovieListing />
                </div>
            </div>
        </div>
    )
}

export default Home
