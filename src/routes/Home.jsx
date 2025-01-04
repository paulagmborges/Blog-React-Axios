import blogFetch from '../axios/config'
import{ useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import './Home.css'

const Home = () => {
  const[posts, setPosts] = useState([])

  const getPosts = async() =>{

   try {
    const response = await blogFetch.get('/posts')
      
      const data =response.data
      console.log(data)
      setPosts(data)
   } catch (error) {
    console.log(error)
    
   }
  }

useEffect(() =>{
  getPosts()
},[])
  return (
    <div>
      <h1>Últimos posts</h1>
      {posts.lenght ===0 ?(
         <p>Caregando ...</p> 
        ):(
        posts.map((post) =>(
          <div className='post' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`} className='btn'>
            Ler mais
            </Link>
          </div>  
        ))
      )}
    </div>
  )
}

export default Home