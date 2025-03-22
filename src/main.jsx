import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DataProvider } from './Context/InterviewContext.jsx'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <App />
    <Toaster></Toaster>
    </DataProvider>
  </StrictMode>,
)
