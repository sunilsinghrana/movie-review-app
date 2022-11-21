import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import MovieApi from '../../common/apis/MovieApi'
import {APIKey} from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term)=>{
    const response = await MovieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`)
      return response.data
    }
)

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term)=>{
    const response = await MovieApi.get(`?apikey=${APIKey}&s=${term}&type=series`)
      return response.data
    }
)

export const fetchAsyncMoviesOrShows = createAsyncThunk('movies/fetchAsyncMoviesOrShows', async (id)=>{
    const response = await MovieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
      return response.data
    }
)


const initialState = {
    movies : {}, 
    shows: {},
    selectMovieOrShow: {},
}

const movieSlice = createSlice({
    name : 'movies',
    initialState,
    reducers: {
        removeSelectMovieOrShow : (state)=>{
            state.selectMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: ()=>{
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload})=>{
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: ()=>{
        },
        [fetchAsyncShows.fulfilled]: (state, {payload})=>{
            return {...state, shows: payload}
        },
        [fetchAsyncMoviesOrShows.fulfilled]: (state, {payload})=>{
            return {...state, selectMovieOrShow: payload}
        },
    }
})

export const {removeSelectMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;