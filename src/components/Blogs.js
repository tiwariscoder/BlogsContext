import React, { useContext } from 'react'
import Spinner from './Spinner'
import {AppContext} from '../context/AppContext'

const Blogs = () => {
  const {posts,loading} = useContext(AppContext)
  return (
    <div className='flex flex-col justify-center h-full items-center gap-y-7 w-11/12 max-w-[670px] py-8 mt-[66px] mb-[70px] scrollbar'>
      {
        loading ? (<Spinner/>) : (posts.length === 0 ? (<div>No Post Found</div>) : (posts.map((post) => (
          <div key={post.id}>
            <p className='font-bold text-lg'>{post.title}</p>
            <p className='text-sm mt-[4px]'>
              By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
            </p>
            <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
            <p className='text-md mt-[14px]'>{post.content}</p>
            <div className='flex gap-x-3'>
              {post.tags.map((tag,index)=>{
                return (
                  <span key={index} className='text-blue-700 underline font-bold text-xs mt-[5px]'>{`#${tag} `}</span>
                )
              })}
            </div>

          </div>
        ))) )
      }
    </div>
  )
}

export default Blogs