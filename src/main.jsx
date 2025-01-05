import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//paginas
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import Post from './routes/Post'
import './index.css'

const router = createBrowserRouter([
  {
  element:<App />,
  children:[
    {
      path:'/',
      element:<Home />
     
    },
    {
       path:'/new',
       element: <NewPost />
    },
    {
      path:'/posts/:id',
      element: <Post />
      
   }
  ],
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
