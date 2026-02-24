import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const redirectedPath = window.sessionStorage.getItem('optfi-spa-redirect')
if (redirectedPath) {
  window.sessionStorage.removeItem('optfi-spa-redirect')
  window.history.replaceState(null, '', redirectedPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
