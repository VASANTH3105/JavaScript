import React from 'react'
import { useState } from 'react';


const Home = () => {


    const[blogs, setblogs] = useState([
        {title: "Lenovo", model: "Ideapad", id: 1},
        {title: "HP", model: "Pavilion", id: 2},
        {title: "Dell", model: "Aspire", id: 3}
    ])


  return (
    <div>
        
        {blogs.map((blog) => (
            <div className='blog-preview'>
                <h2>{ blog.title }</h2>
                <p> { blog.model }</p>

            </div>
        ))}
    </div>
  )
}

export default Home
