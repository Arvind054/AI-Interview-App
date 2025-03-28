import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GetStarted from './Components/GetStarted';
import Home from './Components/Home';
import QuestionPage from './Components/QuestionPage';
import Result from './Components/Result';
import  Feedback  from './Components/Feedback';
import Demo from './Components/Demo';
import Features from './Components/Features'
import About from './Components/About';
const router = createBrowserRouter([
  {
    path:'/',
    element:<GetStarted></GetStarted>
  },
  {
    path:"/Home",
    element:<Home></Home>
  },{
    path:"/interview/question/:id",
    element:<QuestionPage></QuestionPage>
  },{
    path:"/interview/result",
    element:<Result></Result>
  },
  {
    path:"/interview/Feedback",
    element: <Feedback></Feedback>
  },
  {
    path:"/Demo",
    element:<Demo></Demo>
  },{
    path:"/About",
    element:<About></About>
  },{
    path:'/Features',
    element:<Features></Features>
  }
])
function App() {


  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
