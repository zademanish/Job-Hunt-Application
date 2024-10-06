import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import Home from "./components/Home"
import Jobs from "./components/Jobs"
import Browse from "./components/Browse"
import Profile from "./components/Profile"
import JobDescription from "./components/JobDescription"

function App() {
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/Jobs',
    element:<Jobs/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },

])
  return (
    <>
    {/* app router */}
   <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
