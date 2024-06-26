import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from "react-redux";
import {
    fetchBlogs,
    getAllBlogs,
    getBlogError,
    getBlogStatus,
    getFilteredBlogs
} from '../features/blogsDataSlice';
import CardItem from './Card';
import Categories from './Categories';

const Blogs = () => {
    const dispatch = useDispatch()
    const blogStatus = useSelector(getBlogStatus)
    const blogError = useSelector(getBlogError)
    const blogs = useSelector(getFilteredBlogs)

    useEffect(() => {
        if (blogStatus === 'idle') {
            dispatch(fetchBlogs());
        }
    }, [blogStatus, dispatch]);

    return (
        <main expand="lg" className="bg-body-tertiary">
            <Container fluid className='blog-con'>
                {
                    blogs.map((blog) => <CardItem key={blog.id} blog={blog} />)
                }
            </Container>
            <Container fluid className='category-con'>
                <Categories />
            </Container>

        </main>


    )
}

export default Blogs