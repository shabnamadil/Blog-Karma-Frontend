import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000'

const initialState = {
    blogs: [],
    filteredBlogs: [],
    status: 'idle',
    error: null
}

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await axios.get(`${BASE_URL}/api/blogs`);
    return response.data;
});

const blogsDataSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        filterBlogsByCategory(state, action) {
            try {
                if (action.payload != 'All blogs') {
                    state.filteredBlogs = state.blogs.filter(blog => {
                        return blog.category.find(cat => cat.id === action.payload);
                    });
                } else {
                    state.filteredBlogs = state.blogs
                }

            } catch (err) {
                console.log(err.message);
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchBlogs.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.blogs = action.payload
                state.filteredBlogs = action.payload
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default blogsDataSlice.reducer
export const getAllBlogs = (state) => state.blogs.blogs
export const getBlogStatus = (state) => state.blogs.status
export const getBlogError = (state) => state.blogs.error
export const getFilteredBlogs = (state) => state.blogs.filteredBlogs
export const {
    filterBlogsByCategory
} = blogsDataSlice.actions

