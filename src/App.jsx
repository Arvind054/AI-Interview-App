import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GetStarted from './Components/GetStarted';
import Home from './Components/Home';
import QuestionPage from './Components/QuestionPage';
import Result from './Components/Result';
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
  }
])
function App() {


  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
