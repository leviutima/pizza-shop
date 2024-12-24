import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App() {

  return (
    <ThemeProvider storageKey='pizza-shop-theme' defaultTheme='dark'>
      <HelmetProvider>
        <Helmet titleTemplate='%s | pizza shop' />
        <Toaster richColors closeButton/>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  )
}
