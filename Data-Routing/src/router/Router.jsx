import {createBrowserRouter} from "react-router"
import Home from "../screens/Home"
import About from "../screens/About"
import Contact from "../screens/Contact"
import Service from "../screens/Service"
import MainLayout from "../layout/MainLayout"
import AuthLayout from "../layout/AuthLayout"
import Login from "../screens/Login"
import Register from "../screens/Register"


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:[
            {
            path: "",
            element: <Home />
            },
            {
            path: 'about',
            element: <About />
            },
            {
            path: 'contact',
            element: <Contact />
            },
            {
            path: 'service',
            element: <Service />
            },
            {
                path: 'auth',
                element: <AuthLayout />,
                children:[
                    {
                        path: 'login',
                        element: <Login />
                    },
                    {
                        path: 'register/:id',
                        element: <Register />
                    }
                ]
            }
]
}
])