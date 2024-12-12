import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/Signup"
import Home from "./components/Home"
import Jobs from "./components/Jobs"
import Browse from "./components/Browse"
import Profile from "./components/Profile"
import JobDescription from "./components/JobDescription"
import Companies from "./components/admin/Companies"
import CreateCompanies from "./components/admin/CreateCompanies"
import CompanySetup from "./components/admin/CompanySetup"
import AdminJobs from "./components/admin/AdminJobs"
import PostJob from "./components/admin/PostJob"
import Applicants from "./components/admin/Applicants"
import ProtectedRoute from "./components/admin/ProtectedRoute"

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
// for admin routes

{
  path:'/admin/companies',
  element:<ProtectedRoute><Companies/></ProtectedRoute>
},
{
  path:'/admin/companies/create',
  element:<ProtectedRoute><CreateCompanies/></ProtectedRoute>
},
{
  path:'/admin/companies/:id',
  element:<ProtectedRoute><CompanySetup/></ProtectedRoute>
},
{
  path:'/admin/jobs',
  element:<ProtectedRoute><AdminJobs /></ProtectedRoute>
},
{
  path:'/admin/jobs/:id',
  element:<ProtectedRoute><AdminJobs /></ProtectedRoute>
},
{
  path:'/admin/jobs/create',
  element:<ProtectedRoute><PostJob /></ProtectedRoute>
},
{
  path:'/admin/jobs/:id/applicants',
  element:<ProtectedRoute><Applicants /></ProtectedRoute>
}


])
  return (
    <>
    {/* app router */}
   <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
