import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterOrovider, Router } from 'react-router-dom'

const router = createBrowserRouter([
  {
  element:<App />,
  children:[
    {
      path:'/',
     
    },
    {
       path:'/new'
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
