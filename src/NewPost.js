import React from 'react'

const NewPost = ({newtitle, setnewtitle, newbody, setnewbody, handleSubmit}) => {
  return (
      <main className='NewPost'>
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
           <label htmlFor='title'>Title</label>
           <input 
              autoFocus
              required
              id='title'
              placeholder='Enter a Title'
              value={newtitle}
              onChange={(e) => setnewtitle(e.target.value)}
           />
           <label htmlFor='body'>Content</label>
           <textarea 
              required
              id='body'
              placeholder='Enter the Message'
              value={newbody}
              onChange={(e) => setnewbody(e.target.value)}
          />
          <button
              role='button'
              type='submit'
              
          >
              Submit
          </button>
        </form>
      </main>
  )
}

export default NewPost