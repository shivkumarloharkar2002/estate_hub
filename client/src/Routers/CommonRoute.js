import { createBrowserRouter , RouterProvider} from "react-router-dom"
import Login from "../Pages/Login/Login"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Help from "../Pages/Help/Help"
import Services from "../Pages/Services/Services"


const routes = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>

    },
    {
        path:'/services',
        element:<Services/>
    },
    {
        path:'/help',
        element:<Help/>
    }

])


function CommonRoutes(){
    return(
        <>
        <RouterProvider router={routes}/>
        </>
    )
}

export default CommonRoutes;