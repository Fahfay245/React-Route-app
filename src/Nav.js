import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({search, setsearch}) => {
  return (
    <div className='Nav'>
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='#search'>Search Post</label>
          <input 
            autoFocus
            type='text'
            placeholder='Search posts'
            id='search'
            value={search}
            onChange={(e)=> setsearch(e.target.value)}
          />
        </form>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='Posts'>Post</Link></li>
          <li><Link to='About'>About</Link></li>
        </ul>
    </div>
)}

export default Nav