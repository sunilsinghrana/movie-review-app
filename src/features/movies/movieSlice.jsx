import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchAsyncPopularMovie = createAsyncThunk('movies/fetchAsyncPopularMovie', async (term = 'popular')=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${term}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    const data = await response.json();
    return data
    }
)

export const fetchAsyncSelectedMovie = createAsyncThunk('movies/fetchAsyncSelectedMovie', async (id)=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    const data = await response.json();
    return data
    }
)

const initialState = {
    popular: {},
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
        [fetchAsyncPopularMovie.fulfilled]: (state, {payload})=>{
            return {...state, popular: payload}
        },
        [fetchAsyncSelectedMovie.fulfilled]: (state, {payload})=>{
            return {...state, selectMovieOrShow: payload}
        },
    }
})

export const {removeSelectMovieOrShow} = movieSlice.actions;
export const getPopularMovie = (state) => state.movies.popular;
export const getSelectMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;