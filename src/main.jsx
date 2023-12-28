
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {
    
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

  const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
       <AuthProvider>
       <Toaster/>
      < div className='max-w-screen-2xl'>
      <RouterProvider router={router} />
      </div>
       </AuthProvider>
    </HelmetProvider>
  </QueryClientProvider>
  
   
  
)
