import React, { lazy, Suspense } from 'react'
import {createBrowserRouter} from "react-router"
const Home = lazy(()=>import('../pages/Home'))
import MainLayout from '../layout/MainLayout'
import Skeleton from '../component/Skeleton'
const About = lazy(()=>import('../pages/About'))
const Product = lazy(()=>import('../pages/Product'))
const Users = lazy(()=>import('../pages/Users'))

const router = createBrowserRouter([
 
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path:"",
                element: <Home />
            },
            {
                path: "about",
                element: <Suspense fallback={<p>Loading...</p>}>
                    <About />
                </Suspense>
            },
            {
                path: "products",
                element: <Suspense fallback={<p>Loading...</p>}>
                     <Product />
                </Suspense>
            },
            {
                path: "users",
                element: <Suspense fallback={<Skeleton />}>
                    <Users />
                </Suspense>
            }
        ] 
    }

])

export default router
