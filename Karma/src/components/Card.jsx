import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardItem = ({ blog }) => {
    return (
        <Card>
            <Card.Img variant="top" src={blog.blog_image} alt={blog.blog_title} />
            <Card.Body>
                <Card.Title >{blog.blog_title}</Card.Title>
                <Card.Subtitle className='card-body-subtitle'>
                    <span>{blog.comment_count} comments</span>
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{blog.published_date}</small>
            </Card.Footer>
        </Card>
    )
}

export default CardItem