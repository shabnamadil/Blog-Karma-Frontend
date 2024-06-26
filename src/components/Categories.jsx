import React, { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchCategories,
    getAllCategories,
    getCategoryStatus,
    getCategoryError
} from '../features/categoriesDataSlice';
import { filterBlogsByCategory } from '../features/blogsDataSlice';

const Categories = () => {
    const dispatch = useDispatch()
    const catStatus = useSelector(getCategoryStatus)
    const catError = useSelector(getCategoryError)
    const categories = useSelector(getAllCategories)

    useEffect(() => {
        if (catStatus === 'idle') {
            dispatch(fetchCategories());
        }
    }, [catStatus, dispatch]);
    return (
        <ListGroup>
            <ListGroup.Item as="li">Categories</ListGroup.Item>
            <ListGroup.Item 
            className='blog-cat' 
            as="li"
            onClick={() => dispatch(filterBlogsByCategory('All blogs'))}
            >
                All blogs
            </ListGroup.Item>
            {
                categories.map((cat) =>
                    <ListGroup.Item
                        className='blog-cat'
                        as="li"
                        key={cat.id}
                        onClick={() => dispatch(filterBlogsByCategory(cat.id))}
                    >
                        {cat.category_name}
                    </ListGroup.Item>)
            }
        </ListGroup>
    )
}

export default Categories