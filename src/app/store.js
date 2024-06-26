import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../features/blogsDataSlice'
import categoryReducer from '../features/categoriesDataSlice'


export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        categories: categoryReducer
    }
})