import './global.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from 'sonner'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {


  return (
    <HelmetProvider>
      <ThemeProvider storageKey="nomedaaplicacao-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | nomedaaplicacao" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
