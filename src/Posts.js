import React from 'react'
import { Link } from 'react-router-dom'
import PostPage from './PostPage'

const Posts = ({post}) => {
  return (
      <article className='post'>
        <Link to={`posts/${post.id}`}><h2>{post.title}</h2>
        <p>{post.datetime}</p></Link>
        <p>{(post.body).length <= 25? post.body : `${post.body.slice(0,30)}...` }</p>
      
      </article>
  )
}

export default Posts