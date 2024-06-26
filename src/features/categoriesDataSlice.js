import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000'

const initialState = {
    categories: [],
    status: 'idle',
    error: null
}

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await axios.get(`${BASE_URL}/api/categories`);
    return response.data;
  });

const categoriesDataSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const getAllCategories = (state) => state.categories.categories
export const getCategoryStatus = (state) => state.categories.status
export const getCategoryError = (state) => state.categories.error
export default categoriesDataSlice.reducer