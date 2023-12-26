
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <HelmetProvider>
       <AuthProvider>
       <Toaster/>
       <RouterProvider router={router} />
       </AuthProvider>
    </HelmetProvider>
  
)
