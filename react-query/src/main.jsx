import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Route,Router,RouterProvider,createBrowserRouter,createRoutesFromElements} from'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Homepage from './components/Homepage.jsx'
import Layout from './components/Layout.jsx'
import SuperHero from './components/SuperHero.jsx'
import RqsuperHeros from './components/RqsuperHeros.jsx'
import {QueryClientProvider,QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
const queryClient=new QueryClient()
const router=createBrowserRouter(createRoutesFromElements
(
  <Route path='/' element={<Layout/>}>
    <Route path='home' element={<Homepage/>}></Route>
    <Route path='superhero' element={<SuperHero/>}></Route>
    <Route path='rqSuperHero' element={<RqsuperHeros/>}></Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools  initialIsOpen={false} position='bottom-right'></ReactQueryDevtools>
    </QueryClientProvider>
  </React.StrictMode>
)
